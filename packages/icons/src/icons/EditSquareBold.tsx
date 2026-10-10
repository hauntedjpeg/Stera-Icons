import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EditSquareBoldProps = Omit<IconBaseProps, 'children'>;

const EditSquareBold = memo(
  forwardRef<SVGSVGElement, EditSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1H9.9c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22-.05.62-.05 1.41-.05 2.55v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-1.6c0-.55.45-1 1-1s1 .45 1 1v1.6q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.18-.6.3-1.23.43-1.96.5q-1.06.06-2.71.05H9.9q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.49-.94-.47-1.7-1.24-2.19-2.18-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48q1.06-.08 2.71-.06z" />
        <path fillRule="evenodd" d="M15.54 3.54c1.36-1.35 3.56-1.35 4.92 0 1.35 1.36 1.35 3.56 0 4.92L12.7 16.2q-.25.23-.59.28l-4 .5q-.47.05-.83-.28c-.22-.22-.32-.53-.28-.83l.5-4q.05-.34.28-.59zm3.5 1.42c-.57-.58-1.5-.58-2.08 0l-7.51 7.5-.3 2.39 2.39-.3 7.5-7.5c.58-.58.58-1.52 0-2.1" clipRule="evenodd" />
    </IconBase>
  ))
);

EditSquareBold.displayName = 'EditSquareBold';

// Triple export pattern
export { EditSquareBold, EditSquareBold as EditSquareBoldIcon, EditSquareBold as SiEditSquareBold };
export default EditSquareBold;
export type { EditSquareBoldProps };
