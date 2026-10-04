import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 13H3a1 1 0 1 1 0-2h2.5zM13 13h-2v-2h2zM21 11a1 1 0 1 1 0 2h-2.5v-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M8.65 3.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v12.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V5.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.03.72-.02zm-.8 1.5-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1L7 5 7 5.6v12.8l.01.6q.03.16.02.11.04.08.1.11l.12.02.6.01h.8l.6-.01q.16-.03.11-.02a.3.3 0 0 0 .11-.1L9.5 19l.01-.6V5.6L9.49 5c-.01-.12-.03-.13-.02-.11a.3.3 0 0 0-.1-.11l-.12-.02-.6-.01zM15.75 6.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v6q0 .51-.02.88-.02.39-.2.78a2 2 0 0 1-.87.87q-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78Q13 15.51 13 15V9q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.37-.02.88-.02m0 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v6l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04a.5.5 0 0 0 .22-.22l.04-.22L17 15V9l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalCenterRegularDuotone.displayName = 'AlignVerticalCenterRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalCenterRegularDuotone, AlignVerticalCenterRegularDuotone as AlignVerticalCenterRegularDuotoneIcon, AlignVerticalCenterRegularDuotone as SiAlignVerticalCenterRegularDuotone };
export default AlignVerticalCenterRegularDuotone;
export type { AlignVerticalCenterRegularDuotoneProps };
