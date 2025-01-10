import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const offices = [
    {
      name: '洛杉矶办公室',
      subtitle: '加州及西海岸地区总部',
      phones: {
        cn: '167-6208-4336',
        us: ['(949)954-7996'],
      },
      hours: '周一至周五: 9:30 AM - 5:30 PM (PST) 当地时间',
      email: ['ca2@aet21.com'],
      wechat: 'LA9499547996',
      address: '19800 MacArthur Blvd Ste 420, Irvine CA 92612',
    },
    {
      name: '迈阿密办公室',
      phones: {
        cn: '167-1005-2762',
        us: ['(786) 250-3999', '(786)881-7058'],
        fax: '(954)6447787',
      },
      hours: '周一至周五: 9:00 AM - 5:00 PM (EST) 当地时间',
      email: ['info@aet21.com', 'info@americantranslationservice.com'],
      wechat: 'AET-Miami',
      address: '15321 South Dixie Hwy, Suite 302,Palmetto Bay, FL 33157',
    },
    {
      name: '波士顿办公室',
      subtitle: '美国北方区总部',
      phones: {
        us: ['(781)605-1970', '(781)712-0258'],
      },
      hours: '周一至周五: 9:00 AM - 5:30 PM (EST) 当地时间',
      address: '6 Pleasant Street, Suite 418, Malden, MA 02148 USA',
    },
    {
      name: '旧金山办公室',
      subtitle: '加州地区分部',
      phones: {
        cn: '167-1526-5057',
        us: ['(415)868-4892'],
      },
      hours: '周一至周五: 9:00 AM - 5:00 PM (PST) 当地时间',
      email: ['ca@aet21.com'],
      address: '851 Burlway Rd Ste 421, Burlingame CA 94010',
    },
    {
      name: '纽约办公室',
      phones: {
        us: ['(718) 521 6708'],
      },
      email: ['nyc@aet21.com', 'nyc@americantranslationservice.com'],
      wechat: '18611291421',
      address: '60-20 Woodside Ave, Suite 205, Queens NY 11377',
    },
    {
      name: '北京办公室',
      contact: '孙雅红',
      phones: {
        cn: ['(010)65919147'],
        fax: '(010)65918427',
      },
      email: ['beijing@aet21.com'],
      qq: ['3135192546', '3134597962'],
      address: '北京市朝阳区甜水园东街2号甜水园商务中心A栋1层106室（100026）',
    },
    {
      name: '常州办公室',
      subtitle: '江苏地区代表',
      contact: '王艳',
      phones: {
        office: '0519-88188305',
        mobile: '134-0758-0765',
      },
      qq: ['510302331'],
      email: ['510302331@qq.com'],
      address: '江苏·常州新北区汉江西路91号，拔云科技园 B305',
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
              联系我们
            </h1>
            <p
              className="mb-8 max-w-lg text-lg text-white 
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              我们在美国和中国设有多个办事处，24小时为您提供专业服务
            </p>
          </div>
        </div>
      </div>

      {/* Offices Grid */}
      <div className="container mx-auto px-4 py-12">
        {/* West Coast Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {offices
            .filter((office) => ['洛杉矶办公室', '旧金山办公室'].includes(office.name))
            .map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">{office.name}</h2>
                {office.subtitle && <p className="text-[#008080] mb-4">{office.subtitle}</p>}

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>

                  {/* Phone Numbers */}
                  {(office.phones?.us || office.phones?.cn || office.phones?.office) && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.phones.cn && <p>中国直拨：{office.phones.cn}</p>}
                        {office.phones.us?.map((phone) => <p key={phone}>美国电话：{phone}</p>)}
                        {office.phones.office && <p>固定电话：{office.phones.office}</p>}
                        {office.phones.mobile && <p>手机：{office.phones.mobile}</p>}
                        {office.phones.fax && <p>传真：{office.phones.fax}</p>}
                      </div>
                    </div>
                  )}

                  {/* Hours */}
                  {office.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <p>{office.hours}</p>
                    </div>
                  )}

                  {/* Email */}
                  {office.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.email.map((email) => (
                          <p key={email}>{email}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* WeChat/QQ */}
                  {(office.wechat || office.qq) && (
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.wechat && <p>微信：{office.wechat}</p>}
                        {office.qq?.map((qq) => <p key={qq}>QQ：{qq}</p>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* East Coast Offices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offices
            .filter((office) =>
              ['迈阿密办公室', '波士顿办公室', '纽约办公室'].includes(office.name)
            )
            .map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">{office.name}</h2>
                {office.subtitle && <p className="text-[#008080] mb-4">{office.subtitle}</p>}

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>

                  {/* Phone Numbers */}
                  {(office.phones?.us || office.phones?.cn || office.phones?.office) && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.phones.cn && <p>中国直拨：{office.phones.cn}</p>}
                        {office.phones.us?.map((phone) => <p key={phone}>美国电话：{phone}</p>)}
                        {office.phones.office && <p>固定电话：{office.phones.office}</p>}
                        {office.phones.mobile && <p>手机：{office.phones.mobile}</p>}
                        {office.phones.fax && <p>传真：{office.phones.fax}</p>}
                      </div>
                    </div>
                  )}

                  {/* Hours */}
                  {office.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <p>{office.hours}</p>
                    </div>
                  )}

                  {/* Email */}
                  {office.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.email.map((email) => (
                          <p key={email}>{email}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* WeChat/QQ */}
                  {(office.wechat || office.qq) && (
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.wechat && <p>微信：{office.wechat}</p>}
                        {office.qq?.map((qq) => <p key={qq}>QQ：{qq}</p>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* China Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices
            .filter((office) => ['北京办公室', '常州办公室'].includes(office.name))
            .map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2">{office.name}</h2>
                {office.subtitle && <p className="text-[#008080] mb-4">{office.subtitle}</p>}

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>

                  {/* Phone Numbers */}
                  {(office.phones?.us || office.phones?.cn || office.phones?.office) && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.phones.cn && <p>中国直拨：{office.phones.cn}</p>}
                        {office.phones.us?.map((phone) => <p key={phone}>美国电话：{phone}</p>)}
                        {office.phones.office && <p>固定电话：{office.phones.office}</p>}
                        {office.phones.mobile && <p>手机：{office.phones.mobile}</p>}
                        {office.phones.fax && <p>传真：{office.phones.fax}</p>}
                      </div>
                    </div>
                  )}

                  {/* Hours */}
                  {office.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <p>{office.hours}</p>
                    </div>
                  )}

                  {/* Email */}
                  {office.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.email.map((email) => (
                          <p key={email}>{email}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* WeChat/QQ */}
                  {(office.wechat || office.qq) && (
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />
                      <div>
                        {office.wechat && <p>微信：{office.wechat}</p>}
                        {office.qq?.map((qq) => <p key={qq}>QQ：{qq}</p>)}
                      </div>
                    </div>
                  )}
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
    title: '联系我们 | 关于我们',
    description: '美国和中国各地办事处联系方式',
  }
}
