import Link from 'next/link';
import React from 'react'

export default function NotFound() {
      return (
        <div className='nf-div1'>
          <h1 className='nf-h1'>404</h1>
          <h2 className='nf-h2'>
            Page Not Found
          </h2>
          <p className='nf-p'>
            Oops! A página que você está procurando não foi encontrada.
          </p>
          <Link href="/" className='nf-a'>Home</Link>
        </div>
      );
}