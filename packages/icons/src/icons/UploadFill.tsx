import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadFillProps = Omit<IconBaseProps, 'children'>;

const UploadFill = memo(
  forwardRef<SVGSVGElement, UploadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.72c.43 0 .78.35.78.78v.2q.01 1.24-.05 2.03-.04.82-.37 1.48c-.36.71-.94 1.3-1.65 1.65q-.66.33-1.48.37-.8.06-2.03.05H8.3q-1.24.01-2.03-.05-.82-.04-1.48-.37c-.71-.36-1.3-.94-1.65-1.65q-.33-.66-.37-1.48-.06-.8-.05-2.03v-.2c0-.43.35-.78.78-.78s.78.35.78.78v.2c0 .85 0 1.45.03 1.9.04.46.1.72.2.91q.34.64.98.97c.2.1.45.17.9.2.46.04 1.06.04 1.91.04h7.4c.85 0 1.45 0 1.9-.03.46-.04.72-.1.91-.2q.64-.34.97-.98c.1-.2.17-.45.2-.9.04-.46.04-1.06.04-1.91v-.2c0-.43.35-.78.78-.78" />
        <path d="M11.51 2.9c.3-.25.75-.23 1.04.05l4.64 4.65c.8.8.24 2.18-.9 2.18h-3.51v5.72c0 .43-.35.78-.78.78s-.78-.35-.78-.78V9.78H7.71C6.57 9.78 6 8.4 6.8 7.6l4.64-4.65z" />
    </IconBase>
  ))
);

UploadFill.displayName = 'UploadFill';

// Triple export pattern
export { UploadFill, UploadFill as UploadFillIcon, UploadFill as SiUploadFill };
export default UploadFill;
export type { UploadFillProps };
