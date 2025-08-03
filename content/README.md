# FRAME Content Directory

This directory contains all the resource content for the FRAME website. Resources are organized by category and follow a specific structure for easy management and SEO optimization.

## Directory Structure

```
content/
└── resources/
    ├── operations-excellence/      # Lean, continuous improvement, OEE
    ├── reliability-maintenance/     # Predictive maintenance, asset management
    ├── digital-transformation/      # Industry 4.0, IoT, smart factories
    ├── leadership-culture/          # Team building, change management
    ├── quality-metrics/            # Quality systems, KPIs, metrics
    └── process-optimization/       # Six Sigma, process improvement
```

## Resource File Structure

Each resource should be created as a Markdown file with the following frontmatter:

```markdown
---
title: "Hidden Cost of Manufacturing Obsolescence"
slug: "hidden-cost-manufacturing-obsolescence"
description: "Discover the hidden costs of legacy systems in manufacturing..."
category: "Operations Excellence"
author: "Vladimir Romanov"
publishDate: "2024-01-15"
readTime: "8 min read"
featured: true  # Optional: marks as featured resource
keywords: 
  - manufacturing obsolescence
  - legacy systems
  - upgrade strategy
  - plant modernization
relatedResources:
  - systematic-troubleshooting
  - erp-misalignment-manufacturing
---

## Content goes here...
```

## Content Guidelines

### SEO Structure

Each resource page should follow this structure:

1. **H1**: Exact keyword phrase (handled by page title)
2. **Introduction** (100-150 words): Define the concept and highlight relevance
3. **H2: Why This Matters on the Plant Floor**: Real-world relevance
4. **H2: Signs and Signals to Watch For**: Bullet points/checklist format
5. **H2: How to Assess and Act**: FRAME-style mini playbook
6. **H2: Broader Strategy Alignment**: Connect to larger frameworks
7. **H2: How FRAME Readers Handle This**: Success stories/examples

### Writing Style

- Use active voice and direct language
- Include specific examples from manufacturing
- Avoid jargon without explanation
- Target 1,500-2,500 words per resource
- Include internal links to related resources
- Use bold text for key insights

### Keywords to Target

Based on our content strategy, focus on these keyword clusters:

#### Operations Excellence
- hidden cost of manufacturing obsolescence
- obsolete PLC risk register plant floor
- ERP misalignment in manufacturing ops
- improving OEE interpretation for action
- daily direction setting DDS manufacturing meeting

#### Reliability & Maintenance
- electrical panel condition reveals operations
- proactive plant maintenance through panel inspection
- systematic troubleshooting before failure
- centerline maturity curve TPM implementation

#### Digital Transformation
- AI in manufacturing vision systems use cases
- human sensing paired with digital sensors
- operators as best process sensors example

#### Leadership & Culture
- floor presence standards teaching manufacturing teams
- plant teaching skills for stability change
- trust operators over dashboards manufacturing

#### Quality & Metrics
- reading quality metrics plant culture
- time to first action downtime metric
- manufacturing metrics you can act on

#### Process Optimization
- practical Six Sigma in plant operations
- disciplined factory habits scale reliability
- response vs repair time scale standards

## Adding New Resources

1. Create a new `.md` file in the appropriate category folder
2. Add complete frontmatter metadata
3. Follow the SEO structure template
4. Update the resources data in `/app/resources/[slug]/page.tsx`
5. Test the page renders correctly
6. Ensure all internal links work

## Future Enhancements

- [ ] Implement MDX for richer content components
- [ ] Add a CMS integration for easier content management
- [ ] Create automated resource indexing
- [ ] Add search functionality
- [ ] Implement related resources algorithm
- [ ] Add download functionality for resource PDFs