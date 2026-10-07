# QHSE 360

1. `npm install`
2. Renseigner `.env.local` (NEXT_PUBLIC_SUPABASE_ANON_KEY)
3. Supabase → Storage : créer le bucket public `uploads`
4. `npm run dev`
5. Vercel : importer le repo, ajouter les 2 variables d'environnement, déployer.

Tables attendues : companies, profiles (id, company_id, full_name, role), zones, inspections,
non_conformities, audits, awareness_posts, awareness_reads, inductions.
