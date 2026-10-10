import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DrinkCanRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DrinkCanRegularDuotone = memo(
  forwardRef<SVGSVGElement, DrinkCanRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.24 16.25q-.05.77-.33 1.5H7.1q-.28-.73-.33-1.5zM16.91 6.25q.28.73.33 1.5H6.76q.05-.77.33-1.5z" opacity={0.4} />
        <path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M17.5 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.2l.56 1c.58 1.01.89 2.17.89 3.34v7.82c0 1.17-.3 2.33-.89 3.35l-.63 1.1c-.5.86-1.4 1.39-2.39 1.39H9.16c-.99 0-1.9-.53-2.39-1.39l-.63-1.1c-.58-1.02-.89-2.18-.89-3.35V8.09c0-1.17.3-2.33.89-3.35l.57-.99H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM7.44 5.49q-.68 1.22-.69 2.6v7.82q0 1.38.7 2.6l.63 1.11c.22.39.63.63 1.08.63h5.68c.45 0 .86-.24 1.08-.63l.64-1.1c.45-.8.69-1.7.69-2.61V8.09q0-1.38-.7-2.6l-.99-1.74H8.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

DrinkCanRegularDuotone.displayName = 'DrinkCanRegularDuotone';

// Triple export pattern
export { DrinkCanRegularDuotone, DrinkCanRegularDuotone as DrinkCanRegularDuotoneIcon, DrinkCanRegularDuotone as SiDrinkCanRegularDuotone };
export default DrinkCanRegularDuotone;
export type { DrinkCanRegularDuotoneProps };
