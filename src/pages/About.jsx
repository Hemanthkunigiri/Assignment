import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-gray-800 mt-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        About CommunionHub
      </h1>

      {/* Description */}
      <p className="mb-6 text-base sm:text-lg leading-relaxed">
        Welcome to <strong>CommunionHub</strong>, a platform designed to bring people together across different faiths,
        cultures, and interests. We believe that community engagement, social events, and meaningful conversations
        help foster unity and understanding. Whether you're looking to participate in a religious gathering,
        join a social cause, or simply connect with like-minded individuals, CommunionHub is the place for you.
      </p>

      {/* Our Mission */}
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mt-8 mb-3">Our Mission</h2>
      <p className="mb-6 text-base sm:text-lg leading-relaxed">
        At CommunionHub, our mission is to create an inclusive space where people from diverse backgrounds can
        come together. We aim to promote dialogue, understanding, and collaboration among different communities.
        By hosting and organizing events, we provide opportunities for people to share experiences, learn from each
        other, and build meaningful relationships.
      </p>

      {/* What We Offer */}
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mt-8 mb-3">What We Offer</h2>
      <ul className="list-disc pl-5 sm:pl-6 mb-6 text-base sm:text-lg leading-relaxed">
        <li><strong>Event Listings:</strong> Browse and participate in various events, from religious gatherings to charity drives.</li>
        <li><strong>Community Engagement:</strong> Connect with people who share similar values and interests.</li>
        <li><strong>Inclusive Platform:</strong> Open to everyone, regardless of faith, belief, or background.</li>
        <li><strong>Volunteer Opportunities:</strong> Get involved in charity work and community service.</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mt-8 mb-3">Why Choose CommunionHub?</h2>
      <p className="mb-6 text-base sm:text-lg leading-relaxed">
        In today’s fast-paced world, it's easy to feel disconnected. CommunionHub serves as a bridge, helping
        individuals reconnect with their communities, meet new people, and find a sense of belonging. Whether
        you're looking to grow spiritually, contribute to a cause, or just make new friends, our platform
        provides the right space for you.
      </p>

      {/* Join Us */}
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mt-8 mb-3">Join Us Today!</h2>
      <p className="mb-6 text-base sm:text-lg leading-relaxed">
        Be part of a growing community that values inclusivity, respect, and meaningful engagement. Sign up today,
        explore events, and start your journey towards building deeper connections.
      </p>

      {/* Quote */}
      <p className="text-center mt-8 text-lg sm:text-xl font-semibold text-blue-600">
        <i>“Unity in diversity, strength in community.”</i>
      </p>
    </div>
  );
};

export default About;
