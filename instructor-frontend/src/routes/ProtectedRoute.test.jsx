import { describe, afterEach, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProtectedRoute from "./ProtectedRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

function renderProtectedRoute({ adminOnly = false } = {}) {
    return render(
        <MemoryRouter initialEntries={['/secret']}>
            <Routes>
                <Route path="/login" element={<p>Login Page</p>} />
                <Route path="/dashboard" element={<p>Dashboard Page</p>}/>
                
                <Route path="/secret" element={
                <ProtectedRoute adminOnly={adminOnly}>
                    <div>Secret Page</div>
                </ProtectedRoute>
                } />
            </Routes>
        </MemoryRouter>
    )
}

describe("ProtectedRoute", () => {
    afterEach(() => {
        localStorage.clear();
    });

    it("redirects to login page if user is not authenticated", () => {
        renderProtectedRoute({});
        expect(screen.getByText(/login page/i)).toBeInTheDocument();
    });

    it("redirect normal user away from admin only page", () => {
        localStorage.setItem('authToken', 'fake-token');
        localStorage.setItem('role', 'USER');
        renderProtectedRoute({adminOnly: true});

        expect(screen.getByText(/dashboard page/i)).toBeInTheDocument();
    });

    it("allows admin user to access admin only page", () => {
        localStorage.setItem('authToken', 'fake-token');
        localStorage.setItem('role', 'ADMIN');
        renderProtectedRoute({adminOnly: true});

        expect(screen.getByText(/secret page/i)).toBeInTheDocument();
    });
});