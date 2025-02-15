import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  category: string
}

export function Breadcrumbs({ category }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2">{category}</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

