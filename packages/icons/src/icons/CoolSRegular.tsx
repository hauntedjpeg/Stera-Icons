import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoolSRegularProps = Omit<IconBaseProps, 'children'>;

const CoolSRegular = memo(
  forwardRef<SVGSVGElement, CoolSRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.64 1.34c.26-.14.59-.12.83.07l5 4q.27.24.28.59v4c0 .41-.34.75-.75.75h-2.19l2.72 2.72q.22.22.22.53v4q0 .36-.28.59l-5 4c-.28.21-.66.21-.94 0l-5-4q-.27-.23-.28-.59v-4c0-.41.34-.75.75-.75h2.19l-2.72-2.72q-.21-.22-.22-.53V6q0-.35.28-.59l5-4zM7.75 6.36v3.33l4.78 4.78q.21.22.22.53v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.69l-.56-.56H7.75v2.89l4.25 3.4 4.25-3.4V14.3l-4.78-4.78q-.21-.22-.22-.53V7c0-.41.34-.75.75-.75s.75.34.75.75v1.69l.56.56h2.94V6.36L12 2.96z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoolSRegular.displayName = 'CoolSRegular';

// Triple export pattern
export { CoolSRegular, CoolSRegular as CoolSRegularIcon, CoolSRegular as SiCoolSRegular };
export default CoolSRegular;
export type { CoolSRegularProps };
