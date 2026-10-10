import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiRegularProps = Omit<IconBaseProps, 'children'>;

const WifiRegular = memo(
  forwardRef<SVGSVGElement, WifiRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.5q1.52.02 2.73.77c.34.21.43.76.02 1.18l-1.67 1.73c-.6.6-1.57.6-2.16 0l-1.67-1.73c-.4-.42-.32-.96.02-1.18q1.22-.75 2.73-.77M12 9.5c2.48 0 4.76.91 6.53 2.43.17.15.2.44 0 .64l-.67.69c-.19.19-.54.22-.81 0-1.4-1.1-3.15-1.76-5.05-1.76s-3.65.66-5.05 1.76c-.27.22-.62.19-.8 0l-.68-.69c-.2-.2-.17-.49 0-.64C7.24 10.41 9.52 9.5 12 9.5" />
        <path d="M12 4.5c3.82 0 7.3 1.46 9.96 3.88.18.16.2.45 0 .66l-.66.68c-.2.2-.54.22-.78 0-2.3-2-5.27-3.22-8.52-3.22S5.77 7.71 3.48 9.72c-.24.22-.59.2-.78 0l-.66-.68c-.2-.2-.18-.5 0-.66C4.69 5.96 8.18 4.5 12 4.5" />
    </IconBase>
  ))
);

WifiRegular.displayName = 'WifiRegular';

// Triple export pattern
export { WifiRegular, WifiRegular as WifiRegularIcon, WifiRegular as SiWifiRegular };
export default WifiRegular;
export type { WifiRegularProps };
