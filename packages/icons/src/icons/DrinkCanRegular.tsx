import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DrinkCanRegularProps = Omit<IconBaseProps, 'children'>;

const DrinkCanRegular = memo(
  forwardRef<SVGSVGElement, DrinkCanRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75" />
        <path fillRule="evenodd" d="M17.5 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.2l.56 1c.58 1.01.89 2.17.89 3.34v7.82c0 1.17-.3 2.33-.89 3.35l-.63 1.1c-.5.86-1.4 1.39-2.39 1.39H9.16c-.99 0-1.9-.53-2.39-1.39l-.63-1.1c-.58-1.02-.89-2.18-.89-3.35V8.09c0-1.17.3-2.33.89-3.35l.57-.99H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM7.09 17.75q.14.4.35.76l.64 1.11c.22.39.63.63 1.08.63h5.68c.45 0 .86-.24 1.08-.63l.64-1.1q.2-.37.35-.77zm-.33-10-.01.34v7.82l.01.34h10.48l.01-.34V8.09l-.01-.34zm.68-2.26q-.2.37-.35.76h9.82q-.15-.4-.35-.76l-1-1.74H8.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

DrinkCanRegular.displayName = 'DrinkCanRegular';

// Triple export pattern
export { DrinkCanRegular, DrinkCanRegular as DrinkCanRegularIcon, DrinkCanRegular as SiDrinkCanRegular };
export default DrinkCanRegular;
export type { DrinkCanRegularProps };
