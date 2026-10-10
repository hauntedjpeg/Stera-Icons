import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DrinkCanBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DrinkCanBoldDuotone = memo(
  forwardRef<SVGSVGElement, DrinkCanBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 16q-.03 1.05-.46 2H7.46q-.43-.95-.46-2zM16.54 6q.43.95.46 2H7q.03-1.05.46-2z" opacity={0.4} />
        <path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M17.5 2c.55 0 1 .45 1 1 0 .48-.34.88-.79.98l.37.64c.6 1.06.92 2.26.92 3.47v7.82c0 1.21-.32 2.41-.92 3.47l-.64 1.1c-.53.94-1.52 1.52-2.6 1.52H9.16c-1.08 0-2.07-.58-2.6-1.51l-.64-1.11c-.6-1.06-.92-2.26-.92-3.47V8.09c0-1.21.32-2.41.92-3.47l.37-.64c-.45-.1-.79-.5-.79-.98 0-.55.45-1 1-1zM7.66 5.61Q7 6.77 7 8.1v7.82q0 1.32.66 2.48l.63 1.1c.18.32.51.51.87.51h5.68c.36 0 .69-.2.87-.5l.63-1.11q.65-1.16.66-2.48V8.09q0-1.32-.66-2.48L15.42 4H8.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

DrinkCanBoldDuotone.displayName = 'DrinkCanBoldDuotone';

// Triple export pattern
export { DrinkCanBoldDuotone, DrinkCanBoldDuotone as DrinkCanBoldDuotoneIcon, DrinkCanBoldDuotone as SiDrinkCanBoldDuotone };
export default DrinkCanBoldDuotone;
export type { DrinkCanBoldDuotoneProps };
