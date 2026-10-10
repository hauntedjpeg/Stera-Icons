import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugRegularProps = Omit<IconBaseProps, 'children'>;

const PlugRegular = memo(
  forwardRef<SVGSVGElement, PlugRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.1 10.77c.8-.73 2.02-.7 2.78.05l5.3 5.3c.76.76.78 1.99.05 2.77l-.15.16-.01.02c-2.07 2.06-5.32 2.23-7.57.5l-2.97 2.96c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.97-2.97c-1.74-2.25-1.57-5.5.5-7.57l.01-.01zm1.72 1.11c-.19-.19-.5-.2-.7 0l-.14.12c-1.64 1.67-1.64 4.35.02 6 1.65 1.66 4.33 1.66 6 .01l.13-.14c.18-.2.18-.5-.01-.7zM21.47 1.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L19.56 5.5c1.74 2.25 1.57 5.5-.5 7.57l-.01.01-.16.15c-.78.73-2.01.7-2.77-.05l-.62-.62-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.47-1.47-1.94-1.94-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.47-1.47-.62-.62c-.76-.76-.78-1.99-.05-2.77l.15-.16.01-.02c2.07-2.06 5.31-2.22 7.57-.5zM18.01 6c-1.66-1.66-4.34-1.66-6-.01l-.14.14c-.18.2-.18.5.01.7l4.14 4.13.01.01 1.15 1.15c.19.19.5.2.7.01l.13-.14c1.65-1.66 1.65-4.34 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugRegular.displayName = 'PlugRegular';

// Triple export pattern
export { PlugRegular, PlugRegular as PlugRegularIcon, PlugRegular as SiPlugRegular };
export default PlugRegular;
export type { PlugRegularProps };
