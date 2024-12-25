import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export default function LogoMeiyu(props: Props) {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      src="/Meiyu-favicon/favicon.svg"
      alt="Meiyu Logo"
      width={100}
      height={100}
      loading={loading}
      fetchPriority={priority}
      // className={clsx('max-w-[15rem] w-full h-[34px]', className)}
    />
  )
}
