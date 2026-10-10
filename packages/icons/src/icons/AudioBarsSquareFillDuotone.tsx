import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-3.43 4c-.49 0-.88.39-.88.87v9c0 .48.4.88.88.88s.87-.4.87-.88v-9c0-.48-.39-.87-.87-.87m2.66 2c-.48 0-.87.39-.87.87v5c0 .48.39.87.87.88.49 0 .88-.4.88-.88v-5c0-.48-.4-.87-.88-.87M8 10.13c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87m8 0c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M10.67 6.63c.48 0 .87.39.87.87v9c0 .48-.39.87-.87.88-.49 0-.88-.4-.88-.88v-9c0-.48.4-.87.88-.87M13.33 8.63c.49 0 .88.39.88.87v5c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-5c0-.48.39-.87.87-.87M8 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87M16 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AudioBarsSquareFillDuotone.displayName = 'AudioBarsSquareFillDuotone';

// Triple export pattern
export { AudioBarsSquareFillDuotone, AudioBarsSquareFillDuotone as AudioBarsSquareFillDuotoneIcon, AudioBarsSquareFillDuotone as SiAudioBarsSquareFillDuotone };
export default AudioBarsSquareFillDuotone;
export type { AudioBarsSquareFillDuotoneProps };
