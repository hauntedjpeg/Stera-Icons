import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterRegularProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterRegular = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.65 3.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v5.65h2V9q0-.52.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v2.25H21c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5V15q0 .51-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78Q13 15.51 13 15v-2.25h-2v5.65q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-5.65H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5V5.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.03.72-.02zm-.8 1.5-.6.01c-.12.01-.13.03-.11.02q-.08.04-.11.1L7 5 7 5.6v12.8l.01.6q.03.16.02.11.04.08.1.11l.12.02.6.01h.8l.6-.01q.16-.03.11-.02.08-.03.11-.1L9.5 19l.01-.6V5.6L9.49 5c-.01-.12-.03-.13-.02-.11q-.04-.08-.1-.11l-.12-.02-.6-.01zm7.9 3-.76.01-.22.04q-.15.08-.22.22l-.04.22-.01.76v6l.01.76.04.22q.08.15.22.22l.22.04.76.01.76-.01.22-.04q.15-.08.22-.22l.04-.22L17 15V9l-.01-.76-.04-.22q-.08-.15-.22-.22l-.22-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalCenterRegular.displayName = 'AlignVerticalCenterRegular';

// Triple export pattern
export { AlignVerticalCenterRegular, AlignVerticalCenterRegular as AlignVerticalCenterRegularIcon, AlignVerticalCenterRegular as SiAlignVerticalCenterRegular };
export default AlignVerticalCenterRegular;
export type { AlignVerticalCenterRegularProps };
