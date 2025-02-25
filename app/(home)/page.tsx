import { HomeCarousel } from '@/components/shared/home/home-carousel'
import data from '@/lib/data'

export default async function Page() {
  console.log(data.carousels)
  return <HomeCarousel items={data.carousels} />
}
