import { Navigation } from '@/components/creative-harbor/navigation';
import { ChatWidget } from '@/components/creative-harbor/chat-widget';
import { mockDiscussions, mockChatMessages } from '@/lib/mock-data/content';
import { MessageSquare, ArrowUp, Pin, Lock } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <main className="pt-[60px]">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Community <span className="text-gradient">Hub</span>
            </h1>
            <p className="text-muted-foreground">
              Join the conversation and connect with fellow fans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            {/* Left Column - Discussions */}
            <div className="space-y-4">
              {/* Discussion Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['All', 'Music Discussion', 'Books', 'Art', 'General'].map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      category === 'All'
                        ? 'gradient-primary text-white shadow-button'
                        : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Discussions List */}
              <div className="space-y-3">
                {mockDiscussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="bg-card border border-border rounded-lg p-6 card-hover shadow cursor-pointer"
                  >
                    {/* Discussion Header */}
                    <div className="flex items-start gap-4">
                      {/* Upvote */}
                      <div className="flex flex-col items-center gap-1">
                        <button className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                          <ArrowUp className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-semibold text-foreground">
                          {discussion.upvotes}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-2">
                          <h3 className="font-semibold text-foreground text-lg flex-1">
                            {discussion.title}
                          </h3>
                          {discussion.pinned && (
                            <Pin className="w-4 h-4 text-primary flex-shrink-0" />
                          )}
                          {discussion.locked && (
                            <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{discussion.content}</p>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {discussion.author_name}
                          </span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">
                            {discussion.category}
                          </span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.reply_count} replies</span>
                          </div>
                          <span>•</span>
                          <span>{new Date(discussion.created_at).toLocaleDateString()}</span>
                        </div>

                        {/* Tags */}
                        {discussion.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {discussion.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* New Discussion Button */}
              <button className="w-full py-4 gradient-primary text-white font-semibold rounded-lg shadow-button hover:opacity-90 transition-opacity">
                Start New Discussion
              </button>
            </div>

            {/* Right Column - Live Chat */}
            <div className="hidden lg:block sticky top-[76px] h-fit">
              <ChatWidget messages={mockChatMessages} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
