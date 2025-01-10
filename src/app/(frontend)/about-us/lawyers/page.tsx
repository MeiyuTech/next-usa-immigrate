import { Metadata } from 'next'
import Image from 'next/image'

export default function LawyersPage() {
  const lawyers = [
    {
      id: 'yang',
      name: '杨律师',
      englishName: 'James D. Yang',
      image: '/james-yang.png',
      bio: '杨律师出生于中国北京，早年移民美国。他在加州大学伯克利分校获得经济学和亚洲研究学士学位，并在南加州大学获得法学博士学位。杨律师曾在一家精品投资银行担任分析师，并担任持牌房地产经纪人，积累了丰富的商业咨询经验。杨律师曾在另一家国际知名律师事务所担任律师，处理过各种复杂案件，包括向AAO、BIA和美国巡回上诉法院提出的上诉和动议。杨律师专注于EB-5投资签证，已帮助来自世界各地的数百名投资者通过区域中心计划或直接投资自己的企业成功获得绿卡。',
    },
    {
      id: 'chen',
      name: '陈律师',
      englishName: 'Lichi Chen',
      image: '/lichi-chen.png',
      bio: '陈律师毕业于四川大学法学本科，南加州大学法学硕士，是美国纽约州注册律师，中国注册律师。陈律师曾就职于美国洛杉矶一家著名移民律师事务所，为世界级企业谷歌提供移民法律相关服务。陈律师还从事投资移民及区域中心项目案件，其职业移民从业经历异常耀眼。',
    },
  ]
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] w-full mb-12">
        <Image src="/lawyer-hero.png" alt="Lawyer Hero" fill className="object-cover" priority />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1
              className="mb-6 text-5xl font-medium text-white md:text-7xl 
                drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transition-all duration-300
                text-left"
            >
              专业律师团队
            </h1>
            <p
              className="mb-8 max-w-lg text-lg text-white 
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              我们的律师团队拥有丰富的移民法律经验，已帮助来自上百个国家的客户成功获得签证和美国绿卡，他们致力于为客户提供最专业的法律服务
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:gap-16">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <Image
                  src={lawyer.image}
                  alt={`${lawyer.englishName} - Immigration Lawyer`}
                  width={200}
                  height={200}
                  className="rounded-full shadow-lg border-4 border-blue-100"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">{lawyer.name}</h2>
                <h3 className="text-xl text-gray-600 mb-4">{lawyer.englishName}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{lawyer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: '律师团队 | 关于我们',
  }
}
