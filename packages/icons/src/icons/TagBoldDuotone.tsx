import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TagBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TagBoldDuotone = memo(
  forwardRef<SVGSVGElement, TagBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.66 2.75c.44 0 .82 0 1.2.08q.46.12.86.36c.33.2.6.48.9.8l4.44 4.43q.89.86 1.42 1.48.57.63.83 1.38c.26.8.26 1.67 0 2.48q-.27.75-.83 1.38-.53.62-1.42 1.48l-2.44 2.44q-.86.89-1.48 1.42-.63.57-1.38.83c-.8.26-1.67.26-2.48 0q-.75-.27-1.38-.83-.62-.53-1.48-1.42l-4.44-4.43c-.31-.32-.59-.58-.79-.91q-.24-.4-.36-.87c-.09-.37-.08-.75-.08-1.2v-4.7q0-.81.03-1.4c.03-.39.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-4.71 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09Q5 5 4.86 5.3c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v4.7c0 .54 0 .65.03.74q.03.16.12.28c.05.08.12.16.5.54l4.43 4.44c.6.6 1.02 1.02 1.36 1.3.34.3.54.4.71.46q.62.2 1.24 0c.16-.05.37-.17.7-.45.35-.3.76-.7 1.37-1.31l2.44-2.44c.6-.61 1.02-1.02 1.3-1.37.3-.33.4-.54.46-.7.13-.4.13-.84 0-1.24-.05-.17-.17-.37-.45-.7-.3-.35-.7-.76-1.31-1.37L13.2 5.4c-.38-.37-.46-.44-.54-.5q-.12-.08-.28-.11c-.1-.02-.2-.03-.73-.03z" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 6.75c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75" />
    </IconBase>
  ))
);

TagBoldDuotone.displayName = 'TagBoldDuotone';

// Triple export pattern
export { TagBoldDuotone, TagBoldDuotone as TagBoldDuotoneIcon, TagBoldDuotone as SiTagBoldDuotone };
export default TagBoldDuotone;
export type { TagBoldDuotoneProps };
