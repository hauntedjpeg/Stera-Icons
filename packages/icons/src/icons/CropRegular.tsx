import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropRegularProps = Omit<IconBaseProps, 'children'>;

const CropRegular = memo(
  forwardRef<SVGSVGElement, CropRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 1.25c.41 0 .75.34.75.75v3.25h8.05q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v8.05H22c.41 0 .75.34.75.75s-.34.75-.75.75h-3.25V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H9.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V6.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V2c0-.41.34-.75.75-.75m.75 13.55c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h8.05V9.2c0-.57 0-.96-.02-1.25s-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H6.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropRegular.displayName = 'CropRegular';

// Triple export pattern
export { CropRegular, CropRegular as CropRegularIcon, CropRegular as SiCropRegular };
export default CropRegular;
export type { CropRegularProps };
