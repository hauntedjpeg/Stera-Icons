import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SelectFieldBoldProps = Omit<IconBaseProps, 'children'>;

const SelectFieldBold = memo(
  forwardRef<SVGSVGElement, SelectFieldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.85 10.5c.42-.37 1.05-.32 1.4.1.37.42.32 1.05-.1 1.4l-1.75 1.5c-.35.31-.86.33-1.23.07l-.07-.06-1.75-1.5c-.42-.36-.47-1-.1-1.41.35-.42.98-.47 1.4-.1l1.1.93zM11 11c.55 0 1 .45 1 1s-.45 1-1 1H5.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M17.2 5q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q1 14.43 1 13.2v-2.4q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q5.57 5 6.8 5zM6.8 7c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C3 9.36 3 9.94 3 10.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C18.64 7 18.06 7 17.2 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

SelectFieldBold.displayName = 'SelectFieldBold';

// Triple export pattern
export { SelectFieldBold, SelectFieldBold as SelectFieldBoldIcon, SelectFieldBold as SiSelectFieldBold };
export default SelectFieldBold;
export type { SelectFieldBoldProps };
