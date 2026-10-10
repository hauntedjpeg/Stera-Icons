import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesRegularProps = Omit<IconBaseProps, 'children'>;

const SparklesRegular = memo(
  forwardRef<SVGSVGElement, SparklesRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.5 4.25c.33 0 .62.22.72.53l.74 2.44c.7 2.3 2.51 4.12 4.82 4.82l2.44.74c.31.1.53.39.53.72s-.22.62-.53.72l-2.44.74c-2.3.7-4.12 2.51-4.82 4.82l-.74 2.44c-.1.31-.39.53-.72.53s-.62-.22-.72-.53l-.74-2.44c-.7-2.3-2.51-4.12-4.82-4.82l-2.44-.74c-.31-.1-.53-.39-.53-.72s.22-.62.53-.72l2.44-.74c2.3-.7 4.12-2.51 4.82-4.82l.74-2.44.05-.11c.12-.26.38-.42.67-.42m-.02 3.4c-.85 2.8-3.04 4.98-5.83 5.83l-.07.02.07.02c2.8.85 4.98 3.04 5.83 5.83l.02.07.02-.07c.85-2.8 3.04-4.98 5.83-5.83l.07-.02-.07-.02c-2.8-.85-4.98-3.04-5.83-5.83l-.02-.07z" clipRule="evenodd" />
        <path d="M18.88 1.4c.04-.12.2-.12.24 0l.2.63c.38 1.27 1.38 2.27 2.65 2.66l.64.2c.12.03.12.2 0 .23l-.64.2c-1.27.38-2.27 1.38-2.66 2.65l-.2.64c-.03.12-.2.12-.23 0l-.2-.64C18.3 6.7 17.3 5.7 16.04 5.31l-.64-.19c-.12-.04-.12-.2 0-.24l.64-.2c1.27-.38 2.27-1.38 2.66-2.65z" />
    </IconBase>
  ))
);

SparklesRegular.displayName = 'SparklesRegular';

// Triple export pattern
export { SparklesRegular, SparklesRegular as SparklesRegularIcon, SparklesRegular as SiSparklesRegular };
export default SparklesRegular;
export type { SparklesRegularProps };
