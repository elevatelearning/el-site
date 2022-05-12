import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"

import ArticlePreview from "./preview-templates/article-preview"

CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("articles", ArticlePreview)
