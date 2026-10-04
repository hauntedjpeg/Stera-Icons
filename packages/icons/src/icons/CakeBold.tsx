import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CakeBoldProps = Omit<IconBaseProps, 'children'>;

const CakeBold = memo(
  forwardRef<SVGSVGElement, CakeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.6 1.2h.01l.02.03.08.06a8 8 0 0 1 1.04.98C14.27 2.87 15 3.86 15 5a3 3 0 0 1-2 2.83v.67h6a3 3 0 0 1 3 3V13c0 1.01-.38 1.94-1 2.64v1.66q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H7.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-1.66c-.62-.7-1-1.63-1-2.64v-1.5a3 3 0 0 1 3-3h6v-.67A3 3 0 0 1 9 5c0-1.14.73-2.14 1.25-2.73a9 9 0 0 1 1.04-.98l.08-.06.02-.02V1.2L12 2l-.6-.8.6-.45zM15 15.64a4 4 0 0 1-6 0 4 4 0 0 1-4 1.23v.43c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h9.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23v-.43a4 4 0 0 1-4-1.23M5 10.5a1 1 0 0 0-1 1V13a2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0 1 1 0 1 1 2 0 2 2 0 1 0 4 0v-1.5a1 1 0 0 0-1-1zm6.75-6.9C11.27 4.14 11 4.65 11 5a1 1 0 0 0 2 0c0-.35-.27-.86-.75-1.4L12 3.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

CakeBold.displayName = 'CakeBold';

// Triple export pattern (lucide-react style)
export { CakeBold, CakeBold as CakeBoldIcon, CakeBold as SiCakeBold };
export default CakeBold;
export type { CakeBoldProps };
