/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  text: string;
  beforeImg?: string;
  afterImg?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CourseModule {
  id: string;
  icon: string;
  title: string;
  description: string;
  longDescription: string;
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: string;
  isFavorite?: boolean;
  iconName: string;
}
