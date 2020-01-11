import * as React from 'react';
import Dropdown from '../dropdown/Dropdown';
import CloseIcon from '@material-ui/icons/Close';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import SwapVert from '@material-ui/icons/SwapVert';
import IconButton from '@material-ui/core/IconButton';
import { getArrayOfSize } from '../../utils/arrayUtils';
import * as styles from './PreviewPanel.scss';
import { BuilderLayout } from '../builder/Builder.component';

// TODO
import ExportTypePreview from '../../plugins/exportTypes/JSON/Preview.container';

export type PreviewPanelProps = {
    numPreviewRows: number;
    builderLayout: BuilderLayout;
    togglePreview: () => void;
    toggleLayout: () => void;
    updateNumPreviewRows: (numRows: number) => void;
    data: any;
};

const options = getArrayOfSize(10).map((i, index) => ({ value: index + 1, label: index + 1}));

const PreviewPanel = ({ builderLayout, togglePreview, toggleLayout, numPreviewRows, updateNumPreviewRows, data }: PreviewPanelProps) => {
    const ToggleDirectionIcon = builderLayout === 'horizontal' ? SwapHoriz : SwapVert;
    return (
        <div className={styles.previewPanel}>
            <div className={styles.topRow}>
                <span style={{ display: 'flex', flexDirection: 'row' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        Num rows:
                        <Dropdown
                            value={numPreviewRows}
                            onChange={(item: any) => updateNumPreviewRows(item.value)}
                            options={options}
                        />
                    </span>
                </span>
                <span>
                    <span onClick={toggleLayout}>
                        <IconButton size="small" aria-label="Toggle layout">
                            <ToggleDirectionIcon fontSize="large" />
                        </IconButton>
                    </span>
                    <span className={styles.closePanel} onClick={togglePreview}>
                        <IconButton size="small" aria-label="Toggle layout">
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </span>
                </span>
            </div>

            <ExportTypePreview
                numPreviewRows={numPreviewRows}
                builderLayout={builderLayout}
                data={data}
            />
        </div>
    );
};

export default PreviewPanel;






















