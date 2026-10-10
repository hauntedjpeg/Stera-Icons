import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCompareRegularProps = Omit<IconBaseProps, 'children'>;

const GitCompareRegular = memo(
  forwardRef<SVGSVGElement, GitCompareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 1.75c1.8 0 3.25 1.46 3.25 3.25 0 1.54-1.07 2.82-2.5 3.16V16c0 2.07-1.68 3.75-3.75 3.75h-3.19l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3-.09-.1-.07-.14-.05-.16-.01-.13.01-.13.04-.15v-.01l.05-.08q.04-.09.12-.16l3-3c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72H16c1.24 0 2.25-1 2.25-2.25V8.16c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75M9.47 1.47c.3-.3.77-.3 1.06 0l3 3q.07.08.11.15l.05.1.05.15.01.13-.01.13-.05.16q-.02.08-.08.14l-.08.1-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.72-1.72H8c-1.24 0-2.25 1-2.25 2.25v7.84c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8c0-2.07 1.68-3.75 3.75-3.75h3.19L9.47 2.53c-.3-.3-.3-.77 0-1.06M5 17.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCompareRegular.displayName = 'GitCompareRegular';

// Triple export pattern
export { GitCompareRegular, GitCompareRegular as GitCompareRegularIcon, GitCompareRegular as SiGitCompareRegular };
export default GitCompareRegular;
export type { GitCompareRegularProps };
