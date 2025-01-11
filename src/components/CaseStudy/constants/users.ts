import { EndUser } from '../types/users';

export const END_USERS: EndUser[] = [
  {
    title: "ELDERS",
    ageGroup: "Age group: 60+",
    image: "https://images.unsplash.com/photo-1512856246663-aae06c4d2b2d?auto=format&fit=crop&q=80&w=500&h=500"
  },
  {
    title: "KIDS, CARE GIVERS, STUDENTS",
    ageGroup: "Age group: 30+",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=500&h=500"
  },
  {
    title: "DOCTORS, NURSES",
    ageGroup: "Age group: 30+",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=500&h=500"
  },
  {
    title: "ORGANIZATIONS",
    ageGroup: "IT, Ecom, Social Media, Old age and Orphanage homes etc",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500&h=500"
  }
] as const;