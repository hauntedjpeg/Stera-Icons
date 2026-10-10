import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BuildingRegularDuotone = memo(
  forwardRef<SVGSVGElement, BuildingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v14.05h-1.5V6.2c0-.57 0-.96-.02-1.25s-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H9.2c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v14.05h-1.5V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03z" opacity={.4} />
        <path fillRule="evenodd" d="M13 15.25c.97 0 1.75.78 1.75 1.75v3.25h4.75c.41 0 .75.34.75.75s-.34.75-.75.75h-15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.75V17c0-.97.78-1.75 1.75-1.75zm-2 1.5q-.23.02-.25.25v3.25h2.5V17q-.02-.23-.25-.25z" clipRule="evenodd" />
        <path d="M10.25 10.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75V11c0-.41.34-.75.75-.75zM14.25 10.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75V11c0-.41.34-.75.75-.75zM10.25 6c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5C9.34 8 9 7.66 9 7.25v-.5c0-.41.34-.75.75-.75zM14.25 6c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75v-.5c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

BuildingRegularDuotone.displayName = 'BuildingRegularDuotone';

// Triple export pattern
export { BuildingRegularDuotone, BuildingRegularDuotone as BuildingRegularDuotoneIcon, BuildingRegularDuotone as SiBuildingRegularDuotone };
export default BuildingRegularDuotone;
export type { BuildingRegularDuotoneProps };
