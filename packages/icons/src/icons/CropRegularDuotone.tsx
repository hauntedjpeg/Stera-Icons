import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CropRegularDuotone = memo(
  forwardRef<SVGSVGElement, CropRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.75 6.75v8.05c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h8.05v1.5H9.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V6.75zM22 17.25c.41 0 .75.34.75.75s-.34.75-.75.75h-3.25v-1.5zM6 1.25c.41 0 .75.34.75.75v3.25h-1.5V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M14.8 5.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.2c0-.57 0-.96-.02-1.25s-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

CropRegularDuotone.displayName = 'CropRegularDuotone';

// Triple export pattern
export { CropRegularDuotone, CropRegularDuotone as CropRegularDuotoneIcon, CropRegularDuotone as SiCropRegularDuotone };
export default CropRegularDuotone;
export type { CropRegularDuotoneProps };
