import React, { useState } from "react";
import styled from "styled-components";
import { Calendar, Clock, ArrowUpRight, Newspaper, Mail } from "lucide-react";
import Animated from "../components/common/Animated";

// Dummy news data
const newsData = [
  {
    id: 1,
    title: "B4Battery Secures $15M Series A to Expand Ground Ops Across India",
    excerpt:
      "The new funding will accelerate our proprietary 4-step battery refurbishment process and expand our network of service engineers to 500+ nationwide.",
    category: "Company News",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/series-a",
    featured: true,
  },
  {
    id: 2,
    title: "Introducing B4 Core EV-X: The Next Gen of Electric Mobility",
    excerpt:
      "Our latest lithium-ion power pack brings active thermal cooling and an extended lifecycle to commercial EVs.",
    category: "Product Launch",
    date: "Feb 12, 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/ev-x-launch",
    featured: false,
  },
  {
    id: 3,
    title: "Partnership Announced: B4Battery Teams Up with EcoTransit",
    excerpt:
      "EcoTransit will now utilize B4Battery's FleetPro Commercial cells for their entire urban bus fleet in major metropolitan areas.",
    category: "Partnerships",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/ecotransit-partnership",
    featured: false,
  },
  {
    id: 4,
    title: "How Battery Underwriting is Changing the Circular Economy",
    excerpt:
      "An inside look at how our technical assessment protocols are setting new OEM standards for second-life batteries.",
    category: "Industry Insights",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/circular-economy",
    featured: false,
  },
  {
    id: 5,
    title: "B4Battery Wins 'Green Tech Innovator of the Year' Award",
    excerpt:
      "Recognized for our significant contributions to reducing e-waste and advancing sustainable energy solutions globally.",
    category: "Awards",
    date: "Dec 10, 2025",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/green-tech-award",
    featured: false,
  },
  {
    id: 6,
    title: "Expanding to Rural India: The AgriPower Initiative",
    excerpt:
      "Bringing rugged, reliable power solutions to agricultural sectors to stabilize farming operations during grid outages.",
    category: "Initiatives",
    date: "Nov 22, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/agripower-initiative",
    featured: false,
  },
  {
    id: 7,
    title: "Understanding State Policies on EV Battery Disposal",
    excerpt:
      "A comprehensive breakdown of the new recycling mandates and how B4Battery automatically ensures your compliance.",
    category: "Policy & Compliance",
    date: "Nov 05, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/news/ev-disposal-policy",
    featured: false,
  },
];

const NewsAndMedia = () => {
  const featuredArticle = newsData.find((news) => news.featured);
  const standardArticles = newsData.filter((news) => !news.featured);

  return (
    <PageWrapper>
      <Container>
        {/* --- Header --- */}
        <Animated animation="fadeInDown" duration={0.8}>
          <PageHeader>
            <HeaderIcon>
              <Newspaper size={32} />
            </HeaderIcon>
            <TitleWrapper>
              <PageTitle>News & Media</PageTitle>
              <PageSubtitle>
                Stay updated with the latest product launches, company
                milestones, and industry insights from B4Battery.
              </PageSubtitle>
            </TitleWrapper>
          </PageHeader>
        </Animated>

        {/* --- Featured Article --- */}
        {featuredArticle && (
          <Animated animation="fadeIn" delay={0.2} duration={0.8}>
            <FeaturedCard
              href={featuredArticle.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FeaturedImageWrapper>
                <NewsImage
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                />
                <CategoryPill>{featuredArticle.category}</CategoryPill>
              </FeaturedImageWrapper>

              <FeaturedContent>
                <MetaInfo>
                  <MetaItem>
                    <Calendar size={14} /> {featuredArticle.date}
                  </MetaItem>
                  <MetaDivider />
                  <MetaItem>
                    <Clock size={14} /> {featuredArticle.readTime}
                  </MetaItem>
                </MetaInfo>

                <FeaturedTitle>
                  {featuredArticle.title}
                  <ArrowUpRight size={24} className="link-icon" />
                </FeaturedTitle>
                <FeaturedExcerpt>{featuredArticle.excerpt}</FeaturedExcerpt>

                <ReadMoreText>Read Full Story</ReadMoreText>
              </FeaturedContent>
            </FeaturedCard>
          </Animated>
        )}

        {/* --- Dense News Grid --- */}
        <NewsGrid>
          {standardArticles.map((article, index) => (
            <Animated
              key={article.id}
              animation="fadeInUp"
              delay={index * 0.1}
              duration={0.5}
            >
              <NewsCard
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardImageWrapper>
                  <NewsImage src={article.image} alt={article.title} />
                  <CategoryPill>{article.category}</CategoryPill>
                </CardImageWrapper>

                <CardContent>
                  <MetaInfo>
                    <MetaItem>
                      <Calendar size={12} /> {article.date}
                    </MetaItem>
                    <MetaDivider />
                    <MetaItem>
                      <Clock size={12} /> {article.readTime}
                    </MetaItem>
                  </MetaInfo>

                  <CardTitle>
                    {article.title}
                    <ArrowUpRight size={18} className="link-icon" />
                  </CardTitle>
                  <CardExcerpt>{article.excerpt}</CardExcerpt>
                </CardContent>
              </NewsCard>
            </Animated>
          ))}
        </NewsGrid>

        {/* --- Compact Newsletter Banner --- */}
        <Animated animation="slideUp" delay={0.4} duration={0.6}>
          <NewsletterBanner>
            <NewsletterContent>
              <Mail size={32} color="var(--color-primary)" />
              <div>
                <NewsletterTitle>Never Miss an Update</NewsletterTitle>
                <NewsletterDesc>
                  Get the latest energy tech news delivered straight to your
                  inbox.
                </NewsletterDesc>
              </div>
            </NewsletterContent>
            <SubscribeForm onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <SubmitButton type="submit">Subscribe</SubmitButton>
            </SubscribeForm>
          </NewsletterBanner>
        </Animated>
      </Container>
    </PageWrapper>
  );
};

export default NewsAndMedia;

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  padding: 8rem 0 6rem;
  background: var(--color-bg);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border-light);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const HeaderIcon = styled.div`
  width: 64px;
  height: 64px;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
`;

const TitleWrapper = styled.div`
  max-width: 700px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
`;

// Shared styles for Cards
const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const MetaDivider = styled.div`
  width: 4px;
  height: 4px;
  background-color: var(--color-border);
  border-radius: 50%;
`;

const CategoryPill = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-primary);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  background: linear-gradient(
    135deg,
    var(--color-surface-secondary) 0%,
    var(--color-border-light) 100%
  );
`;

// Featured Article
const FeaturedCard = styled.a`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: var(--color-surface);
  /* border-radius: 20px; */
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: all var(--transition-medium);
  box-shadow: var(--shadow-sm);

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: var(--color-border);
    transform: translateY(-4px);

    ${NewsImage} {
      transform: scale(1.05);
    }

    .link-icon {
      transform: translate(4px, -4px);
      color: var(--color-primary);
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 350px;
  overflow: hidden;

  @media (max-width: 992px) {
    height: 300px;
  }
`;

const FeaturedContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FeaturedTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: 1rem;
  font-weight: 800;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  .link-icon {
    color: var(--color-text-muted);
    transition: all var(--transition-medium);
    flex-shrink: 0;
    margin-top: 0.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const FeaturedExcerpt = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ReadMoreText = styled.span`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// Dense News Grid
const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem; /* Tighter gap for compact, full feel */
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const NewsCard = styled.a`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  /* border-radius: 16px; */
  border: 1px solid var(--color-border-light);
  overflow: hidden;
  text-decoration: none;
  transition: all var(--transition-medium);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    border-color: var(--color-border);
    transform: translateY(-4px);

    ${NewsImage} {
      transform: scale(1.05);
    }

    .link-icon {
      transform: translate(3px, -3px);
      color: var(--color-primary);
    }
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* Shorter image height for compactness */
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 1.5rem; /* Tighter padding */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;

  .link-icon {
    color: var(--color-text-muted);
    transition: all var(--transition-fast);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
`;

const CardExcerpt = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limits text to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Newsletter Banner
const NewsletterBanner = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-surface-secondary) 100%
  );
  border: 1px solid var(--color-border-light);
  border-radius: 20px;
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  }
`;

const NewsletterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const NewsletterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const NewsletterDesc = styled.p`
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 1rem;
`;

const SubscribeForm = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-grow: 1;
  max-width: 450px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-family: inherit;
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: var(--color-text);
  color: var(--color-bg);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;
