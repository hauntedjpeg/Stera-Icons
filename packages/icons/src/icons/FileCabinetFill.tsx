import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetFillProps = Omit<IconBaseProps, 'children'>;

const FileCabinetFill = memo(
  forwardRef<SVGSVGElement, FileCabinetFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="file-cabinet-fill" {...props}>
      <path d="M13.5 5.63a.88.88 0 0 1 0 1.75h-3a.88.88 0 0 1 0-1.75z" />
        <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-3.7 12.5a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.75zM9.8 3.88c-.85 0-1.44 0-1.9.03-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v3.33h12.26V7.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

FileCabinetFill.displayName = 'FileCabinetFill';

// Triple export pattern (lucide-react style)
export { FileCabinetFill, FileCabinetFill as FileCabinetFillIcon, FileCabinetFill as SiFileCabinetFill };
export default FileCabinetFill;
export type { FileCabinetFillProps };
