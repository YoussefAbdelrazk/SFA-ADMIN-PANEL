import { KPICard } from '@/components/Dashboard/KPICard';
import { RankingList, topInstructors, topVideos } from '@/components/Dashboard/RankingList';
import { VisitorsChart } from '@/components/Dashboard/VisitorsChart';

const dashboardKPIs = [
  {
    title: 'عدد المستخدمين',
    value: '250 مستخدم',
    change: { value: 3.8, type: 'increase' as const },
    actionText: 'عرض قائمة المستخدمين',
    lastUpdated: 'اخر تحديث اليوم',
    iconName: 'Users',
  },
  {
    title: 'عدد الفيديوهات',
    value: '200 فديو',
    actionText: 'عرض قائمة الفيديوهات',
    lastUpdated: 'اخر تحديث اليوم',
    iconName: 'Video',
  },
  {
    title: 'عدد المدربين',
    value: '7 مدربين',
    change: { value: 1.1, type: 'increase' as const },
    actionText: 'عرض قائمة المدربين',
    lastUpdated: 'اخر تحديث اليوم',
    iconName: 'UserCheck',
  },
  {
    title: 'العائد المادي للاشتراك',
    value: '3500$ مجموع العائد',
    change: { value: 4.3, type: 'decrease' as const },
    actionText: 'عرض جميع التفاصيل',
    lastUpdated: 'اخر تحديث اليوم',
    iconName: 'DollarSign',
  },
  {
    title: 'عدد الاشتراكات',
    value: '150 مشترك',
    change: { value: 7.8, type: 'increase' as const },
    actionText: 'عرض جميع التفاصيل',
    lastUpdated: 'اخر تحديث اليوم',
    iconName: 'CreditCard',
  },
  {
    title: 'عدد الساعات للفيديوهات',
    value: '120 ساعه',
    actionText: 'عرض جميع التفاصيل',
    lastUpdated: 'اخر تحديث اليوم',
    iconName: 'Clock',
  },
];

export default function DashboardPage() {
  return (
    <div className='container mx-auto py-8 px-4 space-y-8'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 arabic-text'>لوحه التحكم</h1>
        <p className='text-gray-600 arabic-text mt-2'>نظرة عامة على إحصائيات المنصة والأداء</p>
      </div>

      {/* KPI Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {dashboardKPIs.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            actionText={kpi.actionText}
            lastUpdated={kpi.lastUpdated}
            iconName={kpi.iconName}
          />
        ))}
      </div>

      {/* Charts and Rankings */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Visitors Chart */}
        <div className='lg:col-span-2'>
          <VisitorsChart />
        </div>

        {/* Top Instructors */}
        <div>
          <RankingList title='اعلي المدربين مشاهده' items={topInstructors} type='instructor' />
        </div>
      </div>

      {/* Top Videos */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <RankingList title='الفيديوهات الاعلي مشاهده' items={topVideos} type='video' />

        {/* Additional Stats Card */}
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white'>
          <h3 className='text-xl font-bold arabic-text mb-4'>ملخص الأداء</h3>
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <span className='arabic-text'>إجمالي المشاهدات</span>
              <span className='font-bold'>125,000</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='arabic-text'>معدل المشاركة</span>
              <span className='font-bold'>85%</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='arabic-text'>معدل الاحتفاظ</span>
              <span className='font-bold'>92%</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='arabic-text'>نمو المستخدمين</span>
              <span className='font-bold text-green-200'>+12%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
