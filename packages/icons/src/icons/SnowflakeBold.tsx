import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeBoldProps = Omit<IconBaseProps, 'children'>;

const SnowflakeBold = memo(
  forwardRef<SVGSVGElement, SnowflakeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1c.55 0 1 .45 1 1v1.77l1.5-.87c.48-.27 1.09-.11 1.37.37.27.48.1 1.09-.37 1.36L13 6.08v4.19l3.63-2.1V5.3c0-.56.45-1 1-1s1 .44 1 1v1.73l1.53-.89c.48-.27 1.09-.1 1.37.37.27.48.1 1.09-.37 1.37l-1.53.88 1.5.87c.48.27.64.88.37 1.36-.28.48-.9.64-1.37.37l-2.5-1.45L14 12l3.63 2.1 2.5-1.45c.48-.27 1.09-.11 1.37.37.27.48.1 1.09-.37 1.36l-1.5.87 1.53.88c.48.28.64.9.37 1.37-.28.48-.9.64-1.37.37l-1.53-.89v1.73c0 .56-.45 1-1 1s-1-.44-1-1v-2.88L13 13.73v4.2l2.5 1.44c.48.27.64.88.37 1.36-.28.48-.9.64-1.37.37l-1.5-.87V22c0 .55-.45 1-1 1s-1-.45-1-1v-1.77l-1.5.87c-.48.27-1.09.11-1.37-.37-.27-.48-.1-1.09.37-1.36l2.5-1.45v-4.19l-3.63 2.1v2.88c0 .56-.45 1-1 1s-1-.44-1-1v-1.73l-1.53.89c-.48.27-1.09.1-1.37-.37-.27-.48-.1-1.09.37-1.37l1.53-.88-1.5-.87c-.48-.27-.64-.88-.37-1.36.28-.48.9-.64 1.37-.37l2.5 1.44L10 12 6.37 9.92l-2.5 1.44c-.48.27-1.09.11-1.37-.37-.27-.48-.1-1.09.37-1.36l1.5-.87-1.53-.88c-.48-.28-.64-.9-.37-1.37.28-.48.9-.64 1.37-.37l1.53.89V5.29c0-.56.45-1 1-1s1 .44 1 1v2.88l3.63 2.1v-4.2L8.5 4.64c-.48-.27-.64-.88-.37-1.36.28-.48.9-.64 1.37-.37l1.5.87V2c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

SnowflakeBold.displayName = 'SnowflakeBold';

// Triple export pattern
export { SnowflakeBold, SnowflakeBold as SnowflakeBoldIcon, SnowflakeBold as SiSnowflakeBold };
export default SnowflakeBold;
export type { SnowflakeBoldProps };
