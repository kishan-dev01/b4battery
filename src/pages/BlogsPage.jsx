import styled from "styled-components";
import {
  Calendar,
  User,
  Tag,
  Search,
  Filter,
  ArrowRight,
  Clock,
} from "lucide-react";
import Animated from "../components/common/Animated";
import { useState } from "react";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Battery Technology",
    "Sustainability",
    "Business",
    "Innovation",
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of Lithium-Ion Battery Technology",
      excerpt:
        "Exploring the latest advancements in lithium-ion battery technology and how they're shaping the future of energy storage.",
      category: "Battery Technology",
      author: "Dr. Rajesh Kumar",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/images/energy-storage.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions for Indian Businesses",
      excerpt:
        "How B4Battery is helping Indian businesses transition to sustainable energy solutions while reducing operational costs.",
      category: "Sustainability",
      author: "Priya Sharma",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/images/payment.png",
      featured: false,
    },
    {
      id: 3,
      title: "VLE Network: Empowering Local Entrepreneurs",
      excerpt:
        "Discover how our Village Level Entrepreneur network is creating opportunities and driving economic growth in rural areas.",
      category: "Business",
      author: "Vikram Singh",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "/images/payment.png",
      featured: false,
    },
    {
      id: 4,
      title: "Innovation in Three-Wheeler Battery Solutions",
      excerpt:
        "Revolutionary battery leasing models that are transforming the three-wheeler industry across India.",
      category: "Innovation",
      author: "Sneha Patel",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/images/payment.png",
      featured: false,
    },
    {
      id: 5,
      title: "Home Energy Storage: The Complete Guide",
      excerpt:
        "Everything you need to know about home energy storage systems and how they can benefit your household.",
      category: "Battery Technology",
      author: "Arjun Mehta",
      date: "March 3, 2024",
      readTime: "8 min read",
      image: "/images/payment.png",
      featured: false,
    },
    {
      id: 6,
      title: "Building a Greener Tomorrow with Clean Energy",
      excerpt:
        "How clean energy initiatives are paving the way for a sustainable future and B4Battery's role in this transformation.",
      category: "Sustainability",
      author: "Dr. Anjali Rao",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "/images/payment.png",
      featured: false,
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs.find((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <Section>
      <Container>
        {/* Header */}
        <Animated animation="fadeIn" duration={0.8}>
          <Header>
            <SectionTitle>Our Blog</SectionTitle>
            <SectionSubtitle>
              Stay updated with the latest insights, innovations, and trends in
              battery technology and sustainable energy
            </SectionSubtitle>
          </Header>
        </Animated>

        {/* Search and Filter */}
        <Animated animation="slideUp" delay={0.2}>
          <FilterSection>
            <SearchContainer>
              <SearchIcon>
                <Search size={20} />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>

            <FilterContainer>
              <FilterIcon>
                <Filter size={18} />
              </FilterIcon>
              <FilterButtons>
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </FilterButton>
                ))}
              </FilterButtons>
            </FilterContainer>
          </FilterSection>
        </Animated>

        {/* Featured Blog */}
        {featuredBlog && selectedCategory === "All" && !searchTerm && (
          <Animated animation="fadeInScale" delay={0.4}>
            <FeaturedSection>
              <FeaturedBadge>Featured Article</FeaturedBadge>
              <FeaturedCard>
                <FeaturedImage
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                />
                <FeaturedContent>
                  <CategoryTag>{featuredBlog.category}</CategoryTag>
                  <FeaturedTitle>{featuredBlog.title}</FeaturedTitle>
                  <FeaturedExcerpt>{featuredBlog.excerpt}</FeaturedExcerpt>
                  <FeaturedMeta>
                    <MetaItem>
                      <User size={16} />
                      {featuredBlog.author}
                    </MetaItem>
                    <MetaItem>
                      <Calendar size={16} />
                      {featuredBlog.date}
                    </MetaItem>
                    <MetaItem>
                      <Clock size={16} />
                      {featuredBlog.readTime}
                    </MetaItem>
                  </FeaturedMeta>
                  <ReadMoreButton>
                    Read Full Article
                    <ArrowRight size={16} />
                  </ReadMoreButton>
                </FeaturedContent>
              </FeaturedCard>
            </FeaturedSection>
          </Animated>
        )}

        {/* Blog Grid */}
        <BlogGrid>
          {regularBlogs.map((blog, index) => (
            <Animated key={blog.id} animation="fadeInScale" delay={0.1 * index}>
              <BlogCard>
                <BlogImage src={blog.image} alt={blog.title} />
                <BlogContent>
                  <BlogCategoryTag>{blog.category}</BlogCategoryTag>
                  <BlogTitle>{blog.title}</BlogTitle>
                  <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                  <BlogMeta>
                    <MetaItem>
                      <User size={14} />
                      {blog.author}
                    </MetaItem>
                    <MetaItem>
                      <Calendar size={14} />
                      {blog.date}
                    </MetaItem>
                    <MetaItem>
                      <Clock size={14} />
                      {blog.readTime}
                    </MetaItem>
                  </BlogMeta>
                </BlogContent>
              </BlogCard>
            </Animated>
          ))}
        </BlogGrid>

        {filteredBlogs.length === 0 && (
          <Animated animation="fadeIn">
            <NoResults>
              <NoResultsTitle>No articles found</NoResultsTitle>
              <NoResultsText>
                Try adjusting your search or filter criteria
              </NoResultsText>
            </NoResults>
          </Animated>
        )}
      </Container>
    </Section>
  );
};

export default BlogsPage;

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem 4rem;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      var(--color-primary) 0%,
      transparent 50%
    );
    opacity: 0.03;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  font-size: 1rem;
  background: var(--color-surface);
  color: var(--color-text);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
  }

  &::placeholder {
    color: var(--color-text-muted);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FilterIcon = styled.div`
  color: var(--color-text-secondary);
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid
    ${(props) =>
      props.active ? "var(--color-primary)" : "var(--color-border)"};
  background: ${(props) =>
    props.active ? "var(--color-primary)" : "var(--color-surface)"};
  color: ${(props) => (props.active ? "white" : "var(--color-text-secondary)")};
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    color: ${(props) => (props.active ? "white" : "var(--color-primary)")};
  }
`;

const FeaturedSection = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;

const FeaturedBadge = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-accent) 0%,
    var(--color-accent-dark) 100%
  );
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
`;

const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: var(--color-surface);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 200, 81, 0.15);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 400px;
  /* object-fit: cover; */
  object-fit: contain;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FeaturedContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryTag = styled.span`
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 1rem;
  width: fit-content;
`;

const FeaturedTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeaturedExcerpt = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
`;

const FeaturedMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.875rem;

  svg {
    color: var(--color-primary);
  }
`;

const ReadMoreButton = styled.button`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 200, 81, 0.3);
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background: var(--color-surface);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 200, 81, 0.15);
    border-color: var(--color-primary);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  /* object-fit: contain; */
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogCategoryTag = styled.span`
  background: var(--color-bg-secondary);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const NoResultsTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const NoResultsText = styled.p`
  color: var(--color-text-secondary);
`;
