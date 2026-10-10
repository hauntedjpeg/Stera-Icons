import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowerRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.9 4.06c1.04-.86 2.5-1.14 3.97-.31s1.96 2.22 1.72 3.55q-.11.63-.43 1.22.68.03 1.31.25c1.28.45 2.28 1.55 2.28 3.23s-1 2.78-2.28 3.23q-.63.22-1.3.25.3.59.42 1.22c.24 1.34-.25 2.72-1.72 3.55s-2.93.55-3.98-.3q-.51-.43-.9-1.02-.37.59-.88 1.01c-1.05.86-2.5 1.14-3.98.31-1.47-.83-1.96-2.21-1.72-3.55q.11-.63.43-1.22-.69-.03-1.31-.25c-1.28-.45-2.28-1.55-2.28-3.23s1-2.78 2.28-3.23q.62-.22 1.3-.25-.3-.59-.42-1.22c-.24-1.34.25-2.72 1.72-3.55s2.93-.55 3.98.3q.51.44.89 1.02.38-.59.9-1.01m3.23 1c-.88-.5-1.68-.34-2.29.16-.65.53-1.09 1.44-1.09 2.39v.2q-.37-.06-.75-.06t-.75.07v-.39c-.06-.88-.48-1.72-1.1-2.21-.6-.5-1.4-.67-2.28-.17s-1.12 1.23-.99 1.98c.15.8.74 1.64 1.59 2.12l.25.14q-.48.59-.73 1.31l-.26-.14c-.85-.48-1.9-.57-2.7-.28-.76.27-1.28.85-1.28 1.82s.52 1.55 1.28 1.82c.8.29 1.85.2 2.7-.28l.26-.14q.25.72.73 1.3l-.25.15c-.85.48-1.44 1.31-1.59 2.12-.13.75.1 1.48.99 1.98.88.5 1.68.33 2.29-.17.65-.53 1.09-1.45 1.09-2.39v-.2q.37.06.75.06t.75-.07v.21c0 .95.44 1.86 1.1 2.4.6.5 1.4.66 2.28.16s1.12-1.23.99-1.98c-.15-.8-.74-1.64-1.59-2.12l-.25-.14q.48-.59.73-1.31l.26.14.16.09c.82.4 1.79.46 2.54.19.76-.27 1.28-.85 1.28-1.82s-.52-1.55-1.28-1.82c-.8-.29-1.85-.2-2.7.28l-.26.14q-.25-.72-.73-1.3l.25-.15c.85-.48 1.44-1.31 1.59-2.12.13-.75-.1-1.48-.99-1.98" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.75c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25-4.25-1.9-4.25-4.25S9.65 7.75 12 7.75m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerRegularDuotone.displayName = 'FlowerRegularDuotone';

// Triple export pattern
export { FlowerRegularDuotone, FlowerRegularDuotone as FlowerRegularDuotoneIcon, FlowerRegularDuotone as SiFlowerRegularDuotone };
export default FlowerRegularDuotone;
export type { FlowerRegularDuotoneProps };
