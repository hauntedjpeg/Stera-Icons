import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { IconBase } from '../IconBase';

describe('IconBase', () => {
  it('renders with default props', () => {
    const { container } = render(
      <IconBase>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).not.toHaveAttribute('width');
    expect(svg).not.toHaveAttribute('height');
    expect(svg).toHaveAttribute('fill', 'currentColor');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('accepts custom size as number', () => {
    const { container } = render(
      <IconBase size={32}>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('accepts custom size as string', () => {
    const { container } = render(
      <IconBase size="2rem">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '2rem');
    expect(svg).toHaveAttribute('height', '2rem');
  });

  it('renders width and height attributes when size={24} is explicitly passed', () => {
    const { container } = render(
      <IconBase size={24}>
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('accepts custom color', () => {
    const { container } = render(
      <IconBase color="red">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'red');
  });

  it('passes className through to svg', () => {
    const { container } = render(
      <IconBase className="custom-class">
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('does not add default classes when no className is provided', () => {
    const { container } = render(
      <IconBase>
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('class');
  });

  it('auto sets aria-hidden="true" when no a11y props present', () => {
    const { container } = render(
      <IconBase>
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).not.toHaveAttribute('role');
  });

  it('treats undefined a11y props as not provided', () => {
    const { container } = render(
      <IconBase aria-label={undefined} title={undefined}>
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).not.toHaveAttribute('role');
    expect(svg).not.toHaveAttribute('aria-label');
    expect(container.querySelector('title')).toBeNull();
  });

  it('explicit aria-hidden wins over an accessible name', () => {
    const { container } = render(
      <IconBase aria-hidden={true} aria-label="Search icon">
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('respects explicit aria-hidden="false"', () => {
    render(
      <IconBase aria-hidden={false}>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders aria-label when provided and does not auto-hide', () => {
    render(
      <IconBase aria-label="Search icon">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = screen.getByLabelText('Search icon');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-label', 'Search icon');
    expect(svg).not.toHaveAttribute('aria-hidden');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('exposes icons labelled with aria-labelledby', () => {
    const { container } = render(
      <IconBase aria-labelledby="label-id">
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('aria-hidden');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('keeps a caller-supplied role when an accessible name is given', () => {
    const { container } = render(
      <IconBase role="presentation" aria-label="Search icon">
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('role', 'presentation');
  });

  it('does not hide or assign a role when only another aria-* prop is given', () => {
    const { container } = render(
      <IconBase aria-describedby="desc-id">
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('aria-hidden');
    expect(svg).not.toHaveAttribute('role');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<SVGSVGElement>();
    render(
      <IconBase ref={ref}>
        <path d="M10 10" />
      </IconBase>
    );
    
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('renders children (SVG paths)', () => {
    render(
      <IconBase>
        <path d="M10 10" data-testid="test-path" />
        <circle cx="12" cy="12" r="5" data-testid="test-circle" />
      </IconBase>
    );
    
    expect(screen.getByTestId('test-path')).toBeInTheDocument();
    expect(screen.getByTestId('test-circle')).toBeInTheDocument();
  });


  it('forwards standard SVG props', () => {
    render(
      <IconBase data-testid="custom-svg" strokeWidth={2}>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = screen.getByTestId('custom-svg');
    expect(svg).toHaveAttribute('stroke-width', '2');
  });

  it('respects role attribute when provided', () => {
    render(
      <IconBase role="img">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
    expect(svg).not.toHaveAttribute('aria-hidden');
  });

  it('renders title as a <title> element', () => {
    const { container } = render(
      <IconBase title="Icon title">
        <path d="M10 10" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('title');
    expect(svg?.firstElementChild?.tagName.toLowerCase()).toBe('title');
    expect(svg?.firstElementChild).toHaveTextContent('Icon title');
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).not.toHaveAttribute('aria-hidden');
    expect(screen.getByRole('img', { name: 'Icon title' })).toBe(svg);
  });

  it('renders <title> before other children', () => {
    const { container } = render(
      <IconBase title="Icon title">
        <path d="M10 10" />
        <circle cx="12" cy="12" r="5" />
      </IconBase>
    );

    const svg = container.querySelector('svg');
    expect(svg?.children[0].tagName.toLowerCase()).toBe('title');
    expect(svg?.children[1].tagName.toLowerCase()).toBe('path');
    expect(svg?.children[2].tagName.toLowerCase()).toBe('circle');
  });
});
