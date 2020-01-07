import MarkdownIt from 'markdown-it'
import MarkdownItTOC from 'markdown-it-table-of-contents'
import MarkdownItAnchor from 'markdown-it-anchor'

const markdown = new MarkdownIt()
markdown.use(MarkdownItTOC).use(MarkdownItAnchor)

const Marked = content =>
  markdown
    .render(content)
    .replace(
      /<pre><code/g,
      '<pre><div class="flag"><span class="span-r"></span><span class="span-y"></span><span class="span-g"></span></div><code'
    )

export default Marked
