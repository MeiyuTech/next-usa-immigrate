interface MegaMenuProps {
  setIsHovering: (isHovering: boolean) => void
}

export function MegaMenu({ setIsHovering }: MegaMenuProps) {
  return (
    <div
      className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container grid grid-cols-3 gap-8 py-8">
        {/* Use Cases Column */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Use Cases
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Headless CMS
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Enterprise App Builder
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Headless E-Commerce
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Digital Asset Management
            </a>
          </div>
        </div>

        {/* Features Column */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Features
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Multi-Tenancy
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              White Label
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Localization
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Access Control
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Auth
            </a>
          </div>
        </div>

        {/* Case Studies Column */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Case Studies
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">See what others are building with Payload.</h4>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Browse Case Studies
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductMegaMenu() {
  return (
    <div className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-[12px]">
      <div className="container grid grid-cols-3 gap-8 py-8">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Use Cases
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Headless CMS
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Enterprise App Builder
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Headless E-Commerce
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Digital Asset Management
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Features
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Multi-Tenancy
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              White Label
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Localization
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Access Control
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Auth
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Case Studies
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">See what others are building with Payload.</h4>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Browse Case Studies
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WhyPayloadMegaMenu() {
  return (
    <div className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-[12px]">
      <div className="container grid grid-cols-3 gap-8 py-8">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Benefits
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Flexibility
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Scalability
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Performance
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Security
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Comparisons
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Payload vs. Traditional CMS
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Payload vs. Other Headless CMS
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Payload vs. Custom Solutions
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Success Stories
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Discover how companies succeed with Payload.</h4>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Read Success Stories
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DevelopersMegaMenu() {
  return (
    <div className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-[12px]">
      <div className="container grid grid-cols-3 gap-8 py-8">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Resources
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Documentation
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              API Reference
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Tutorials
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Blog
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Community
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Discord
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Stack Overflow
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Tools
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Explore developer tools and resources.</h4>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              View All Tools
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EnterpriseMegaMenu() {
  return (
    <div className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-[12px]">
      <div className="container grid grid-cols-3 gap-8 py-8">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Solutions
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Enterprise CMS
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Digital Experience Platform
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              E-commerce
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Intranet
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Services
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Consulting
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Implementation
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Training
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Support
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Contact
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Ready to scale your business with Payload?</h4>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Contact Sales
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 024 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DocsMegaMenu() {
  return (
    <div className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-[12px]">
      <div className="container grid grid-cols-3 gap-8 py-8">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Getting Started
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Installation
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Configuration
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Authentication
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Fields
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Advanced Topics
          </h3>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Access Control
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              Hooks
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              GraphQL
            </a>
            <a
              href="#"
              className="block text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              REST API
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Resources
          </h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Explore our comprehensive documentation.</h4>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground"
            >
              View Full Documentation
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
