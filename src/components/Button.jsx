import Link from 'next/link'

export const Button = ({ href, className, ...props }) => {
  return href ? (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-black text-white border border-2 border-white font-semibold py-2 px-8 rounded-sm hover:bg-white hover:text-black transition duration-300'
      {...props}
    />
  ) : (
    <button
      type='button'
      className='bg-black text-white border border-2 border-white font-semibold py-2 px-8 rounded-sm hover:bg-white hover:text-black transition duration-300'
      {...props}
    />
  );
}
