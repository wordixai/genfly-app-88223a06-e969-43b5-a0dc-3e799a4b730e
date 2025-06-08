import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Sparkles, Target, Zap, Heart, Brain, Users, Globe } from 'lucide-react';

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
            >
              EVOLVED STUDIO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#wellness" className="text-gray-300 hover:text-white transition-colors">Wellness</a>
              <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-8"
          >
            <Badge variant="outline" className="border-green-500 text-green-400 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              The Future of Wellness Media
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-green-400 bg-clip-text text-transparent">
                WELLNESS
              </span>
              <br />
              <span className="text-green-400">AMPLIFIED</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We transform brands into wellness powerhouses. From concept to production, 
              strategy to real wellness solutions. Your brand's wellness extension starts here.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                Launch Your Wellness Extension
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-sm text-gray-500"
          >
            Trusted by global brands ready to evolve
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-40 right-20 w-3 h-3 bg-emerald-500 rounded-full opacity-40"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">End-to-End</span>
              <br />
              <span className="text-green-400">Wellness Engine</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't just create content—we build complete wellness ecosystems for your brand
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Brand Strategy</CardTitle>
                  <CardDescription className="text-gray-400">
                    Strategic wellness positioning that aligns with your core brand values
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Content Production</CardTitle>
                  <CardDescription className="text-gray-400">
                    Premium wellness content that resonates with your target community
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Wellness Solutions</CardTitle>
                  <CardDescription className="text-gray-400">
                    Real wellness services and consultations for your community
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Community Building</CardTitle>
                  <CardDescription className="text-gray-400">
                    Cultivate engaged wellness communities around your brand
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Digital Platforms</CardTitle>
                  <CardDescription className="text-gray-400">
                    Custom wellness platforms and social series development
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Global Scaling</CardTitle>
                  <CardDescription className="text-gray-400">
                    Scale your wellness extension across markets and demographics
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Extensions Section */}
      <section id="portfolio" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Brand Wellness Extensions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Imagine your brand with a wellness dimension. We make it reality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-black border-gray-800 overflow-hidden group hover:border-red-500 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400')] bg-cover bg-center opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">RedBull+</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">Energy × Wellness</CardTitle>
                  <CardDescription className="text-gray-400">
                    Transforming high-energy lifestyle into sustainable wellness practices
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-black border-gray-800 overflow-hidden group hover:border-blue-500 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400')] bg-cover bg-center opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">Samsung+</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">Tech × Mindfulness</CardTitle>
                  <CardDescription className="text-gray-400">
                    Merging cutting-edge technology with mental wellness solutions
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-black border-gray-800 overflow-hidden group hover:border-gray-400 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400')] bg-cover bg-center opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">Tesla+</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">Innovation × Health</CardTitle>
                  <CardDescription className="text-gray-400">
                    Sustainable living meets personal wellness in the future of mobility
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-8 text-lg">
              Every brand has wellness potential. We unlock it.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explore Your Brand's Wellness Future
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Wellness Solutions Section */}
      <section id="wellness" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <Badge variant="outline" className="border-green-500 text-green-400 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Real Wellness Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Healing Brands.
                <br />
                <span className="text-green-400">Healing People.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We don't just create marketing campaigns. We provide genuine wellness solutions 
                that transform both your brand identity and your community's wellbeing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4" />
                  Professional wellness consultations
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4" />
                  Mental health support services
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4" />
                  Holistic lifestyle coaching
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4" />
                  Custom wellness program development
                </div>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Your Wellness Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-full absolute inset-0 blur-3xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                    <div className="text-gray-400">Lives Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                    <div className="text-gray-400">Brand Extensions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                    <div className="text-gray-400">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Evolve?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Transform your brand into a wellness powerhouse. Create meaningful connections. 
              Build communities that care. Start your evolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Download Our Manifesto
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                EVOLVED STUDIO
              </div>
              <p className="text-gray-400 mb-4">
                The wellness media engine for brands ready to make a real impact.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <div>Brand Strategy</div>
                <div>Content Production</div>
                <div>Wellness Solutions</div>
                <div>Community Building</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-gray-400">
                <div>LinkedIn</div>
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Newsletter</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 Evolved Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;