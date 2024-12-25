interface MegaMenuWrapperProps {
  children: React.ReactNode
}

function MegaMenuWrapper({ children }: MegaMenuWrapperProps) {
  return (
    <div className="absolute left-0 right-0 top-full bg-[#00808033] backdrop-blur-[12px]">
      <div className="container mx-auto grid grid-cols-3 gap-8 py-8 text-[15px] text-white">
        {children}
      </div>
    </div>
  )
}

export function ServiceMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Use Cases
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Headless CMS
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Enterprise App Builder
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Headless E-Commerce
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Digital Asset Management
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Features
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Multi-Tenancy
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            White Label
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Localization
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Access Control
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Auth
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Case Studies
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            See what others are building with Payload.
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            Browse Case Studies
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function WhyPayloadMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Benefits
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Flexibility
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Scalability
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Performance
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Security
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Comparisons
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Payload vs. Traditional CMS
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Payload vs. Other Headless CMS
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Payload vs. Custom Solutions
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Success Stories
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            Discover how companies succeed with Payload.
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            Read Success Stories
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function DevelopersMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Resources
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Documentation
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            API Reference
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Tutorials
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Community
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Discord
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Stack Overflow
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Tools
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            Explore developer tools and resources.
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            View All Tools
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function EnterpriseMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Solutions
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Enterprise CMS
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Digital Experience Platform
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            E-commerce
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Intranet
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Services
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Consulting
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Implementation
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Training
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Support
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Contact
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            Ready to scale your business with Payload?
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            Contact Sales
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 024 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}

export function DocsMegaMenu() {
  return (
    <MegaMenuWrapper>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Getting Started
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Installation
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Configuration
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Authentication
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Fields
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Advanced Topics
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Access Control
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            Hooks
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            GraphQL
          </a>
          <a
            href="#"
            className="block font-medium text-white/80 hover:text-white transition-colors"
          >
            REST API
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white/60">
          Resources
        </h3>
        <div className="space-y-4">
          <h4 className="text-[22px] font-semibold leading-tight text-white">
            Explore our comprehensive documentation.
          </h4>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white"
          >
            View Full Documentation
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </MegaMenuWrapper>
  )
}
