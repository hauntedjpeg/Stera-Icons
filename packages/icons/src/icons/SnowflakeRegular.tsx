import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeRegularProps = Omit<IconBaseProps, 'children'>;

const SnowflakeRegular = memo(
  forwardRef<SVGSVGElement, SnowflakeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.25c.41 0 .75.34.75.75v2.2l1.88-1.08c.35-.2.81-.09 1.02.27s.08.82-.28 1.03l-2.62 1.51v4.77l4.13-2.38V5.29c0-.42.34-.75.75-.75s.75.33.75.75v2.16l1.9-1.1c.36-.2.82-.08 1.03.28.2.35.08.81-.27 1.02l-1.91 1.1L21 9.83c.36.2.49.67.28 1.03s-.67.48-1.03.27l-2.62-1.51L13.5 12l4.13 2.38 2.62-1.51c.36-.2.82-.08 1.03.27.2.36.08.82-.28 1.03l-1.87 1.08 1.9 1.1c.36.2.49.67.28 1.02-.2.36-.67.49-1.02.28l-1.91-1.1v2.16c0 .42-.34.75-.75.75s-.75-.33-.75-.75v-3.03l-4.13-2.38v4.77l2.63 1.51c.35.21.48.67.27 1.03s-.67.48-1.03.27l-1.87-1.08V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2l-1.87 1.08c-.36.2-.82.09-1.03-.27-.2-.36-.08-.82.28-1.03l2.62-1.51V13.3l-4.13 2.38v3.03c0 .42-.34.75-.75.75s-.75-.33-.75-.75v-2.16l-1.9 1.1c-.36.2-.82.08-1.03-.27-.2-.36-.08-.82.27-1.03l1.91-1.1L3 14.17c-.36-.2-.49-.67-.28-1.03s.67-.48 1.03-.27l2.62 1.51L10.5 12 6.37 9.62l-2.62 1.51c-.36.2-.82.09-1.03-.27-.2-.36-.08-.82.28-1.03l1.87-1.08-1.9-1.1c-.36-.2-.49-.67-.28-1.03.2-.35.67-.48 1.02-.27l1.91 1.1V5.3c0-.42.34-.75.75-.75s.75.33.75.75v3.03l4.13 2.38V5.93L8.63 4.42c-.36-.21-.49-.67-.28-1.03s.67-.48 1.03-.27l1.87 1.08V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SnowflakeRegular.displayName = 'SnowflakeRegular';

// Triple export pattern
export { SnowflakeRegular, SnowflakeRegular as SnowflakeRegularIcon, SnowflakeRegular as SiSnowflakeRegular };
export default SnowflakeRegular;
export type { SnowflakeRegularProps };
