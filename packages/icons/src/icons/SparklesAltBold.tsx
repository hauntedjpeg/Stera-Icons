import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltBoldProps = Omit<IconBaseProps, 'children'>;

const SparklesAltBold = memo(
  forwardRef<SVGSVGElement, SparklesAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.5 10c.47 0 .87.33.98.78.52 2.37 2.37 4.22 4.74 4.74.45.1.78.51.78.98s-.33.87-.78.98C10.85 18 9 19.85 8.48 22.22c-.1.45-.51.78-.98.78s-.87-.33-.98-.78C6 19.85 4.15 18 1.78 17.48c-.45-.1-.78-.51-.78-.98s.33-.87.78-.98C4.15 15 6 13.15 6.52 10.78c.1-.45.51-.78.98-.78m0 3.67c-.7 1.16-1.67 2.13-2.83 2.83 1.16.7 2.13 1.67 2.83 2.83.7-1.16 1.67-2.13 2.83-2.83-1.16-.7-2.13-1.67-2.83-2.83M16.5 1c.47 0 .87.33.98.78C18 4.15 19.85 6 22.22 6.52c.45.1.78.51.78.98s-.33.87-.78.98c-2.37.52-4.22 2.37-4.74 4.74-.1.45-.51.78-.98.78s-.87-.33-.98-.78C15 10.85 13.15 9 10.78 8.48c-.45-.1-.78-.51-.78-.98s.33-.87.78-.98C13.15 6 15 4.15 15.52 1.78c.1-.45.51-.78.98-.78m0 3.67c-.7 1.16-1.67 2.13-2.83 2.83 1.16.7 2.13 1.67 2.83 2.83.7-1.16 1.67-2.13 2.83-2.83q-1.76-1.07-2.83-2.83" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesAltBold.displayName = 'SparklesAltBold';

// Triple export pattern
export { SparklesAltBold, SparklesAltBold as SparklesAltBoldIcon, SparklesAltBold as SiSparklesAltBold };
export default SparklesAltBold;
export type { SparklesAltBoldProps };
