import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeDashRegularProps = Omit<IconBaseProps, 'children'>;

const CubeDashRegular = memo(
  forwardRef<SVGSVGElement, CubeDashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.12c.41 0 .75.34.75.75v1.85l1.14-.63c.36-.2.81-.07 1.02.3.2.36.07.81-.3 1.01l-1.27.72c-.83.46-1.85.46-2.68 0L9.4 21.4c-.37-.2-.5-.65-.3-1.01.2-.37.66-.5 1.02-.3l1.14.63v-1.85c0-.41.34-.75.75-.75M3 13.75c.41 0 .75.34.75.75v1.32c0 .46.25.88.64 1.1l1.22.67c.37.2.5.66.3 1.02-.2.37-.66.5-1.02.3l-1.23-.68c-.87-.49-1.41-1.4-1.41-2.4V14.5c0-.41.34-.75.75-.75M21 13.75c.41 0 .75.34.75.75v1.32c0 1-.54 1.92-1.41 2.4l-1.23.68c-.36.2-.81.08-1.02-.29-.2-.36-.07-.81.3-1.02l1.22-.67c.4-.22.64-.64.64-1.1V14.5c0-.41.34-.75.75-.75M14.45 9.78c.36-.2.82-.07 1.02.3.2.35.07.81-.3 1.01l-2.42 1.35v2.68c0 .42-.34.75-.75.75s-.75-.33-.75-.75v-2.68L8.82 11.1c-.36-.2-.49-.66-.29-1.02s.66-.49 1.02-.29L12 11.14zM4.89 5.1c.36-.2.81-.08 1.02.29.2.36.07.81-.3 1.01L4.54 7l1.64.9c.36.2.49.66.29 1.03-.2.36-.66.49-1.02.29l-1.7-.95V9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.18c0-1 .54-1.92 1.41-2.4zM18.1 5.39c.2-.37.65-.5 1.01-.3l1.23.68c.87.49 1.41 1.4 1.41 2.4V9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.27l-1.7.95c-.36.2-.82.07-1.02-.3-.2-.36-.07-.81.3-1.01L19.45 7l-1.07-.6c-.37-.2-.5-.65-.3-1.01M10.66 1.88c.83-.46 1.85-.46 2.68 0l1.27.71c.37.2.5.66.3 1.02-.2.37-.66.5-1.02.3l-1.28-.72c-.38-.2-.84-.2-1.22 0l-1.28.71c-.36.2-.81.08-1.02-.29-.2-.36-.07-.81.3-1.02z" />
    </IconBase>
  ))
);

CubeDashRegular.displayName = 'CubeDashRegular';

// Triple export pattern
export { CubeDashRegular, CubeDashRegular as CubeDashRegularIcon, CubeDashRegular as SiCubeDashRegular };
export default CubeDashRegular;
export type { CubeDashRegularProps };
