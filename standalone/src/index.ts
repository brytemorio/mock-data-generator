require('browser-env')();

import {
    DataTypeGenerationOptions,
    DataTypeWorkerInterface,
    ExportType,
    GDTemplate,
    WorkerInterface
} from '~types/generator';
import { DataType } from '../../client/_plugins';
import { dataTypeNodeData, exportTypeNodeData } from '../_standalone';
import countryNames from '../../client/_namePlugins';
import { generate } from '../../client/src/utils/generatorUtils';
import workerUtils from '../../client/src/utils';
import { getI18nStrings } from './utils/i18n';
import { GDLocale, GenerationTemplate } from '~types/general';
import { DTGenerateResult, DTGenerationData } from '~types/dataTypes';
import { convertRowsToGenerationTemplate } from '~store/generator/generator.selectors';

// no point requiring users to supply a colIndex. We can add that ourselves.
// export type DataTypeGenerationOptionsWithColIndex = DataTypeGenerationOptions & {
//     colIndex: number;
// }

/**
 * Used by both the node and binary scripts. It takes the user's template and fluffs it out with all the necessary
 * values needed by the generation script.
 * @param template
 */
const getNormalizedGDTemplate = (template: GDTemplate): GDTemplate => ({
    generationSettings: {
        locale: 'en',
        stripWhitespace: false,
        packetSize: 100,
        ...template.generationSettings
    },

    // TODO need to prefill all
    dataTemplate: template.dataTemplate,
    exportSettings: template.exportSettings
});

const doStuff = (template: GDTemplate) => {
    const normalizedTemplate = getNormalizedGDTemplate(template);
    const i18n = getI18nStrings(normalizedTemplate.generationSettings.locale as GDLocale)
    const dataTypeInterface = getWorkerInterface();

    const onComplete = (data: string) => {
        console.log('!!!!!!', data);
    };

    generate(normalizedTemplate, {
        i18n,
        workerUtils,
        dataTypeInterface,
        template: convertPublicToInternalTemplate(normalizedTemplate.dataTemplate),
        countryNames,
        onComplete
    });
};

let newRowId = 1;
const convertPublicToInternalTemplate = (rows: DataTypeGenerationOptions[]): GenerationTemplate => {
    const cleanRows = rows.map((row) => ({
        // for some situations, users can supply their own IDs so they can map data together. This pads the ones that
        // don't have it
        id: row.id || newRowId++,
        title: row.title,
        dataType: row.plugin,
        data: row.settings
    }));

    return convertRowsToGenerationTemplate(cleanRows);
};


const getWorkerInterface = (): DataTypeWorkerInterface => {
    const workerInterface: DataTypeWorkerInterface = {};

    Object.keys(dataTypeNodeData).forEach((dataType) => {
        workerInterface[dataType] = {
            context: 'node',
            send: (payload: DTGenerationData): DTGenerateResult => {
                // this extends whatever settings the user supplied with the default values defined by the Data Type,
                // so the data passed to the DT's generate method is complete
                const fullPayload = {
                    ...payload,
                    rowState: {
                        ...dataTypeNodeData[dataType as DataType].defaultGenerationOptions,
                        ...payload.rowState
                    }
                };
                return dataTypeNodeData[dataType as DataType].generate(fullPayload, workerUtils)
            }
        }
    });

    return workerInterface;
};

const getExportTypeWorkerInterface = () => {
    return {
        context: 'node',
        send: () => {

        }
    };
};

(async () => {
    const template: GDTemplate = {
        generationSettings: {
            numResults: 10
        },
        dataTemplate: [
            {
                plugin: DataType.Names,
                title: 'First Name',
                settings: {
                    options: ['Name']
                }
            },
            {
                plugin: DataType.Names,
                title: 'Last Name',
                settings: {
                    options: ['Surname']
                }
            }
        ],
        exportSettings: {
            plugin: ExportType.JSON,
            settings: {
                dataStructureFormat: 'simple'
            }
        }
    };

     await doStuff(template);
})();
