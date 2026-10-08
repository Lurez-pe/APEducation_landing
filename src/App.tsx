/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProgramPage } from './pages/ProgramPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programas/ciclo-escolar" element={<ProgramPage programKey="ciclo-escolar" />} />
        <Route path="programas/clases-one-to-one" element={<ProgramPage programKey="clases-one-to-one" />} />
        <Route path="programas/ciclo-de-verano-2027" element={<ProgramPage programKey="ciclo-de-verano-2027" />} />
        <Route path="programas/conversation-class" element={<ProgramPage programKey="conversation" />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}