import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFieldFillDuotone = memo(
  forwardRef<SVGSVGElement, TextFieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-field-fill-duotone" {...props}>
      <path d="M14.13 16.75H6q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7-.01-1.03.04-1.7.04-.7.31-1.28.5-.92 1.42-1.42.59-.28 1.28-.31.67-.05 1.7-.04h8.13zM18 7.25q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7.01 1.03-.04 1.7-.04.7-.31 1.28c-.32.6-.81 1.1-1.42 1.42q-.59.28-1.28.31-.67.05-1.7.04h-2.12v-9.5z" opacity={0.4} />
        <path d="M12.6 3.13c1 0 1.84.54 2.4 1.28a3 3 0 0 1 2.4-1.28h.6a.88.88 0 0 1 0 1.75h-.6q-.52-.02-1 .58a3 3 0 0 0-.52 1.74v9.6c0 .71.21 1.32.52 1.74s.67.59 1 .59h.6a.88.88 0 0 1 0 1.75h-.6c-1 0-1.84-.55-2.4-1.3a3 3 0 0 1-2.4 1.3H12a.88.88 0 0 1 0-1.75h.6q.51.02 1-.6c.3-.4.53-1.02.53-1.73V7.2l-.01-.26a3 3 0 0 0-.52-1.48q-.48-.6-1-.58H12a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

TextFieldFillDuotone.displayName = 'TextFieldFillDuotone';

// Triple export pattern (lucide-react style)
export { TextFieldFillDuotone, TextFieldFillDuotone as TextFieldFillDuotoneIcon, TextFieldFillDuotone as SiTextFieldFillDuotone };
export default TextFieldFillDuotone;
export type { TextFieldFillDuotoneProps };
