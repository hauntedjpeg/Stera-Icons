import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeFillProps = Omit<IconBaseProps, 'children'>;

const SnowflakeFill = memo(
  forwardRef<SVGSVGElement, SnowflakeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c6 0 10.88 4.86 10.88 10.87S18 22.88 12 22.88C6 22.88 1.13 18 1.13 12 1.13 6 5.99 1.13 12 1.13m0 2c-.48 0-.87.39-.87.87v1.48l-.7-.4c-.41-.23-.95-.09-1.19.33s-.1.95.32 1.2l1.56.9v2.97L8.56 9V7.2c0-.5-.4-.88-.88-.88s-.87.39-.87.87V8L5.5 7.24c-.42-.24-.95-.1-1.2.32-.24.42-.1.96.32 1.2l1.3.74-.7.4c-.41.24-.56.77-.32 1.2.24.41.78.55 1.2.31l1.56-.9L10.25 12l-2.58 1.49-1.56-.9c-.42-.24-.96-.1-1.2.32s-.1.95.32 1.2l.7.39-1.3.74c-.41.24-.56.78-.32 1.2s.78.56 1.2.32L6.8 16v.8c0 .48.39.87.87.87s.87-.39.87-.87V15l2.59-1.5v2.99l-1.57.9c-.42.24-.56.77-.32 1.2.24.41.78.55 1.2.31l.69-.4V20c0 .48.39.87.87.88.48 0 .88-.4.88-.88v-1.49l.68.4c.42.24.96.1 1.2-.32s.1-.95-.32-1.2l-1.56-.9v-2.98l2.58 1.5v1.8c0 .48.39.87.87.87s.88-.39.88-.87v-.8l1.28.75c.42.24.95.1 1.2-.32.24-.42.1-.96-.32-1.2l-1.29-.74.69-.4c.42-.24.56-.77.32-1.2-.24-.41-.78-.55-1.2-.31l-1.56.9-2.58-1.5 2.58-1.48 1.56.9c.42.24.96.1 1.2-.32s.1-.95-.32-1.2l-.69-.39 1.29-.74c.41-.24.56-.78.32-1.2s-.78-.56-1.2-.32l-1.28.74V7.2c0-.48-.4-.87-.88-.87s-.87.39-.87.87v1.8l-2.59 1.5V7.5l1.57-.9c.42-.24.56-.77.32-1.2-.24-.41-.78-.55-1.2-.31l-.69.4V4c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

SnowflakeFill.displayName = 'SnowflakeFill';

// Triple export pattern
export { SnowflakeFill, SnowflakeFill as SnowflakeFillIcon, SnowflakeFill as SiSnowflakeFill };
export default SnowflakeFill;
export type { SnowflakeFillProps };
