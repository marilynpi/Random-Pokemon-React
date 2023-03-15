import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe ('Header', () => {
  it('Should show title ', () => {
    render(<Header/>);
    const title = screen.getByAltText( /Generate a Random Pokemon/i );
    expect(title).toBeInTheDocument();
  });
})